const userId = "uniqueUserID"; // Replace with a unique user ID
const socket = new WebSocket('ws://localhost:8080');

const statusDiv = document.getElementById('status');
const messagesDiv = document.getElementById('messages');

function addMessage(text) {
  const messageElement = document.createElement('div');
  messageElement.textContent = text;
  messagesDiv.appendChild(messageElement);
}

socket.addEventListener('open', () => {
  socket.send(JSON.stringify({ type: 'online', userId }));
  statusDiv.textContent = 'Connected';
});

socket.addEventListener('close', () => {
  statusDiv.textContent = 'Disconnected';
});

socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);

  switch (message.type) {
    case 'userConnected':
      addMessage(`User ${message.userId} connected`);
      break;
    case 'userDisconnected':
      addMessage(`User ${message.userId} disconnected`);
      break;
    default:
      console.warn('Unknown message type:', message.type);
  }
});
