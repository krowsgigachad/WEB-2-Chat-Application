const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'mychat')));

app.get('/', (req, res) => {
  res.send('hi');
});

app.get('/json', (req, res) => {
  res.json({ text: 'hi', numbers: [1, 2, 3] });
});

app.get('/echo', (req, res) => {
  const input = req.query.input || '';
  const normal = input;
  const shouty = input.toUpperCase();
  const characterCount = input.length;
  const backwards = input.split('').reverse().join('');

  res.json({ normal, shouty, characterCount, backwards });
});

app.get('/sse', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.flushHeaders();

  // Send messages to the client in real-time
  setInterval(() => {
    res.write(`data: ${JSON.stringify({ text: 'Real-time message' })}\n\n`);
  }, 1000);
});

// Handle chat messages using Socket.io
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
