const DEFAULT_MESSAGE = process.env.WELCOME_MESSAGE || 'Hola desde tu entorno de desarrollo en contenedor!';

let currentMessage = DEFAULT_MESSAGE;

function getWelcomeMessage() {
  return currentMessage;
}

function updateWelcomeMessage(message) {
  currentMessage = message;
  return currentMessage;
}

function resetWelcomeMessage() {
  currentMessage = DEFAULT_MESSAGE;
}

module.exports = {
  getWelcomeMessage,
  updateWelcomeMessage,
  resetWelcomeMessage,
  DEFAULT_MESSAGE,
};
