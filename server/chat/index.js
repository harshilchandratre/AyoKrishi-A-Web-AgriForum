const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: 'http://localhost:5173' } });

const users = {};

io.on('connection', (socket) => {
  socket.on('new-user-joined', (name) => {
    console.log('New user joined:', name);
    users[socket.id] = name;
    socket.broadcast.emit('user-joined', name);
  });

  socket.on('send-message', (message) => {
    socket.broadcast.emit('receive-message', { message: message, name: users[socket.id] });
  });

  socket.on('disconnect', () => {
    if (users[socket.id]) {
      const userName = users[socket.id];
      delete users[socket.id];
      socket.broadcast.emit('user-left', userName);
      console.log('User disconnected:', userName);
    }
  });
});



const PORT = 8004;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


