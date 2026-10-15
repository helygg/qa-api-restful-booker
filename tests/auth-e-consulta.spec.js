import { test, expect } from '@playwright/test';

test.describe('Autenticação e consulta', () => {
  test('API01 - gerar token com credenciais válidas', async ({ request }) => {
    const response = await request.post('/auth', {
      data: { username: 'admin', password: 'password123' },
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.token).toBeTruthy();
  });

  test('API02 - listar reservas', async ({ request }) => {
    const response = await request.get('/booking');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body[0]).toHaveProperty('bookingid');
  });

  test('API03 - consultar reserva por id', async ({ request }) => {
    const lista = await (await request.get('/booking')).json();
    const id = lista[0].bookingid;

    const response = await request.get(`/booking/${id}`, {
      headers: { Accept: 'application/json' },
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty('firstname');
    expect(body).toHaveProperty('totalprice');
  });
});