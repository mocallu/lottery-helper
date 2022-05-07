const NumbersSumExtractor = require('@/extractors/NumbersSumExtractor');

describe('Numbers Sum Extractor', () => {
  it('Deve retornar a soma dos numeros do array', () => {
    const ex = new NumbersSumExtractor();
    ex.setBet([1, 2, 3]);
    const res = ex.process().getResult();
    expect(res).toBe(6);
  });
});
