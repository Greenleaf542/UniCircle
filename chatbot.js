const header = document.getElementById('chatbot-header');
const toggle = document.getElementById('chatbot-toggle');
const messages = document.getElementById('chatbot-messages');
const inputArea = document.getElementById('chatbot-input-area');
const input = document.getElementById('chatbot-input');
const sendBtn = document.getElementById('chatbot-send');

let open = false;

// Toggle chatbot visibility
header.addEventListener('click', () => {
  open = !open;
  if (open) {
    messages.classList.remove('hidden');
    inputArea.classList.remove('hidden');
    toggle.textContent = '×';
  } else {
    messages.classList.add('hidden');
    inputArea.classList.add('hidden');
    toggle.textContent = '−';
  }
});

// Simple bot responses
const botReplies = {
  'hello': 'Hello! How can I help you today?',
  'hi': 'Hi there! How can I help you?',
  'events': 'You can view all upcoming events in the Events section.',
  'host': 'To host an event, click on the "Host Your Event" button.',
  'about': 'UniCircle is a platform to discover, book, and host campus events.',
  'contact': 'You can reach us via email at support@unicircle.com.',
  'default': "Sorry, I didn't understand that. Can you try asking differently?"
};

function getBotReply(message) {
  const key = message.toLowerCase();
  return botReplies[key] || botReplies['default'];
}

// Send message
function sendMessage() {
  if (!input.value.trim()) return;
  const userMessage = document.createElement('div');
  userMessage.className = 'text-right text-gray-900 font-semibold';
  userMessage.textContent = input.value;
  messages.appendChild(userMessage);

  const botMessage = document.createElement('div');
  botMessage.className = 'text-left text-gray-700';
  botMessage.textContent = getBotReply(input.value.trim());
  messages.appendChild(botMessage);

  input.value = '';
  messages.scrollTop = messages.scrollHeight;
}

sendBtn.addEventListener('click', sendMessage);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendMessage();
});
