const Download = require('@/Download');

jest.mock('@/services/Http', () => {
  return jest.fn().mockImplementation(() => require('./mocks/service/Http'));
});

describe('Download', () => {
  const download = new Download('./test/data');
  it('Deve baixar os resultados da lotofacil', async () => {
    await download.all('lotofacil');
    expect(true).toBeTruthy();
  });
});
