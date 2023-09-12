import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Chat.css';

import notificationSound from './notification.mp3'; // Import the notification sound



const Chat = () => {

  

  document.cookie = "myCookie=myValue; SameSite=None; Secure";

  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [username, setUsername] = useState(localStorage.getItem('username') || 'Anonymous');
  const [socket, setSocket] = useState(null);
  const [audio] = useState(new Audio(notificationSound)); // Create an audio element

  // Function to request notification permission
  const requestNotificationPermission = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
        } else {
          console.log('Notification permission denied.');
        }
      });
    }
  };

  // Function to show a notification
  const showNotification = (title, options) => {
    if (Notification.permission === 'granted') {
      new Notification(title, options);
    }
  };

  useEffect(() => {
    // Request notification permission when the component mounts
    requestNotificationPermission();

    const newSocket = io('http://localhost:8004', { transports: ['websocket', 'polling'] });


    setSocket(newSocket);

    newSocket.emit('new-user-joined', username);

    newSocket.on('receive-message', ({ message, name }) => {
      setMessages((prevMessages) => [...prevMessages, { name, message }]);

      // Show a notification for received messages
      showNotification('New Message', {
        body: `${name}: ${message}`,
      });

      // Play the notification sound
      audio.play();
    });

    newSocket.on('user-joined', (name) => {
      var message;
      if (name === 'Anonymous') {
        message = `${name} joined the chat`;
      } else {
        message = `${name} (${username}) joined the chat`;
      }
      setMessages((prevMessages) => [
        ...prevMessages,
        { name, message },
      ]);

      // Show a notification for new user joins
      showNotification('New User Joined', {
        body: message,
      });

      // Play the notification sound
      audio.play();
    });

    newSocket.on('user-left', (name) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { name, message: `${name} left the chat` },
      ]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [username, audio]);

  const handleNameChange = () => {
    const userPrompt = prompt('Please enter your name:');
    if (userPrompt) {
      setUsername(userPrompt);
      localStorage.setItem('username', userPrompt);
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (messageInput.trim() !== '') {
      socket.emit('send-message', messageInput);

      // Show a notification for sent messages
      showNotification('Message Sent', {
        body: `You: ${messageInput}`,
      });

      // Play the notification sound
      audio.play();

      setMessageInput('');
    }
  };


  return (
    <div className="chat-container">
      <div className="heading">
        <img className="ayologo" src="/ayogo.png" alt="ayokrishi_logo" />
        <label htmlFor="heading">AyoKrishi - Connect</label>
        {/* <button onClick={handleNameChange}>Change Name</button> */}
      </div>

      <div className="conversation">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.name === username ? 'message-right' : 'message-left'}`}>
            {message.name === username ? 'You' : message.name}: {message.message}
          </div>
        ))}
      </div>

      <div className="send">
        <form onSubmit={sendMessage}>
          <textarea
            className="message-input"
            name="messageInput"
            id="messageInput"
            placeholder="Enter your message here..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          ></textarea>
          <button className="send-button" type="submit">
            <img className="send-leaf" src="/leaf.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
