document.addEventListener('DOMContentLoaded', function () {
  const socket = io();
  const form = document.getElementById('message-form');
  const input = document.getElementById('message-input');
  const messages = document.getElementById('messages');
  let messageCount = 0;

  // Handle incoming chat messages from Socket.io
  socket.on('chat message', function (msg) {
    appendMessage(msg);
  });

  // Handle form submission
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const messageText = input.value.trim();

    if (messageText !== '') {
      sendMessage(messageText);
      input.value = '';
    }
  });

  // Append a message to the messages div
  function appendMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = message;

    if (messageCount % 2 === 1) {
      messageDiv.classList.add('green-message');
    }

    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight; // Auto-scroll to the bottom

    messageCount++;
  }

  // Send a message to the server using Socket.io
  function sendMessage(message) {
    socket.emit('chat message', message);
  }
});
