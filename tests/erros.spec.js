import { test, expect } from '@playwright/test';

test.describe('Casos de erro', () => {
  test('API07 - login com senha inválida não gera token', async ({ request }) => {
    const response = await request.post('/auth', {
      data: { username: 'admin', password: 'senha_errada' },
    });
    const body = await response.json();
    expect(body.token).toBeUndefined();
    expect(body.reason).toBe('Bad credentials');
  });

  test('API08 - apagar reserva sem token é negado', async ({ request }) => {
    const lista = await (await request.get('/booking')).json();
    const response = await request.delete(`/booking/${lista[0].bookingid}`);
    expect(response.status()).toBe(403);
  });

  test('API09 - consultar reserva inexistente retorna 404', async ({ request }) => {
    const response = await request.get('/booking/99999999');
    expect(response.status()).toBe(404);
  });
});