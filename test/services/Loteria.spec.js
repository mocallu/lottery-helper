const LoteriaService = require('@/services/Loteria');

jest.mock('@/services/Http', () => {
  return jest.fn().mockImplementation(() => require('../mocks/service/Http'));
});

describe('Loteria Service', () => {
  const Loteria = new LoteriaService();

  it('Deve retornar o último resultado dos resultados da loteria', async () => {
    const res = await Loteria.getResults('lotofacil', 'latest');
    expect(res.statusCode).toBe(200);
  });

  it('Deve retornar a lista de resultados do jogo', async () => {
    const res = await Loteria.getResults('lotofacil');
    expect(res.statusCode).toBe(200);
  });

  it('Deve retornar error ao tentar listar resultados de um jogo invalido', async () => {
    let res = '';
    try {
      await Loteria.getResults('jogo-do-bicho', 'latest');
    } catch (error) {
      res = error;
    }
    expect(res).toBe('invalid_game');
  });
});
