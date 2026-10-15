import { test, expect } from '@playwright/test';

const novaReserva = {
  firstname: 'Maria',
  lastname: 'Silva',
  totalprice: 250,
  depositpaid: true,
  bookingdates: {
    checkin: '2026-11-01',
    checkout: '2026-11-05',
  },
  additionalneeds: 'Café da manhã',
};

async function gerarToken(request) {
  const response = await request.post('/auth', {
    data: { username: 'admin', password: 'password123' },
  });
  const body = await response.json();
  return body.token;
}

test.describe('Reservas (CRUD)', () => {
  test('API04 - criar reserva', async ({ request }) => {
    const response = await request.post('/booking', {
      data: novaReserva,
      headers: { Accept: 'application/json' },
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty('bookingid');
    expect(body.booking.firstname).toBe('Maria');
    expect(body.booking.totalprice).toBe(250);
  });

  test('API05 - alterar reserva com token válido', async ({ request }) => {
    const criada = await (
      await request.post('/booking', {
        data: novaReserva,
        headers: { Accept: 'application/json' },
      })
    ).json();
    const token = await gerarToken(request);

    const response = await request.put(`/booking/${criada.bookingid}`, {
      data: { ...novaReserva, firstname: 'Joana', totalprice: 300 },
      headers: { Accept: 'application/json', Cookie: `token=${token}` },
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.firstname).toBe('Joana');
    expect(body.totalprice).toBe(300);
  });

  test('API06 - apagar reserva com token válido', async ({ request }) => {
    const criada = await (
      await request.post('/booking', {
        data: novaReserva,
        headers: { Accept: 'application/json' },
      })
    ).json();
    const token = await gerarToken(request);

    const response = await request.delete(`/booking/${criada.bookingid}`, {
      headers: { Cookie: `token=${token}` },
    });
    expect(response.status()).toBe(201);

    const consulta = await request.get(`/booking/${criada.bookingid}`);
    expect(consulta.status()).toBe(404);
  });
});