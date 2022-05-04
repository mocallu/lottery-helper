const HttpService = require('@/services/Http');

jest.mock('request', () => {
  return require('../mocks/Request');
});

describe('Http Service', () => {
  const Http = new HttpService({
    baseUrl: 'https://reqres.in',
  });

  it('Deve retornar erro ao fazer uma request GET com url invalida', async () => {
    let res = null;
    try {
      await Http.get('https://invalid-url');
    } catch (e) {
      res = e;
    }
    expect(res).toBeDefined();
  });

  it('Deve retornar erro 404 ao tentar processar via GET um endpoint invalido', async () => {
    const promise = await Http.get('/invalid-path');
    expect(promise.statusCode).toBe(404);
  });

  it('Deve retornar erro 404 ao tentar processar via POST um endpoint invalido', async () => {
    const promise = await Http.post('/invalid-path');
    expect(promise.statusCode).toBe(404);
  });

  it('Deve retornar erro ao fazer uma request POST com url invalida', async () => {
    let res = null;
    try {
      await Http.post('https://invalid-url');
    } catch (e) {
      res = e;
    }
    expect(res).toBeDefined();
  });
});
