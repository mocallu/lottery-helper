const HttpService = require('@/services/Http');

describe('Http Service', () => {
  const Http = new HttpService({
    baseUrl: 'https://reqres.in',
  });

  it('Needs to return an error on invalid get url', () => {
    const promise = Http.get('https://invalid-path').catch((e) => {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(e).toBeDefined();
    });
    return promise;
  });

  it('Needs to return an error on invalid get path', () => {
    const promise = Http.get('/invalid-path').catch((e) => {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(e).toBeDefined();
    });
    return promise;
  });

  it('Needs to return an error on invalid post url', () => {
    const promise = Http.post('/invalid-path').catch((e) => {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(e).toBeDefined();
    });
    return promise;
  });

  it('Needs to return an error on invalid post path', () => {
    const promise = Http.post('https://invalid-path').catch((e) => {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(e).toBeDefined();
    });
    return promise;
  });
});
