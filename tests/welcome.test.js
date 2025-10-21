const request = require('supertest');
const app = require('../src/app');
const {
  resetWelcomeMessage,
  DEFAULT_MESSAGE,
} = require('../src/welcomeService');

describe('API de bienvenida', () => {
  beforeEach(() => {
    resetWelcomeMessage();
  });

  test('devuelve el mensaje de bienvenida por defecto', async () => {
    const response = await request(app).get('/api/welcome');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: DEFAULT_MESSAGE });
  });

  test('actualiza el mensaje de bienvenida', async () => {
    const nuevoMensaje = 'Hola, DevContainer!';

    const postResponse = await request(app)
      .post('/api/welcome')
      .send({ message: nuevoMensaje });

    expect(postResponse.status).toBe(200);
    expect(postResponse.body).toEqual({ message: nuevoMensaje });

    const getResponse = await request(app).get('/api/welcome');

    expect(getResponse.status).toBe(200);
    expect(getResponse.body).toEqual({ message: nuevoMensaje });
  });

  test('valida que el mensaje sea obligatorio', async () => {
    const response = await request(app)
      .post('/api/welcome')
      .send({});

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'El campo "message" es obligatorio.' });
  });
});
