import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './style.css';



const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [username, setUsername] = useState('');

  const socket = io('http://localhost:8004', { transports: ['websocket', 'polling'] });

  useEffect(() => {
    const name = prompt('Enter your name') || 'Anonymous';
    setUsername(name);

    socket.emit('new-user-joined', name);

    socket.on('receive-message', ({ message, name }) => {
      setMessages((prevMessages) => [...prevMessages, { name, message }]);
    });

    socket.on('user-joined', (name) => {
      setMessages((prevMessages) => [...prevMessages, `${name} joined the chat`]);
    });

    socket.on('user-left', (name) => {
      setMessages((prevMessages) => [...prevMessages, `${name} left the chat`]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (messageInput.trim() !== '') {
      socket.emit('send-message', messageInput);
      setMessages((prevMessages) => [...prevMessages, `You: ${messageInput}`]);
      setMessageInput('');
    }
  };

  return (
    <section className="chat">
      <div className="container">
        <div className="heading">
          <img className="ayologo" src="/ayogo.png" alt="ayokrishi_logo" />
          <label htmlFor="heading">AyoKrishi - Connect</label>
        </div>

        <div className="conversation">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message}
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
    </section>
  );
};

export default Chat;
