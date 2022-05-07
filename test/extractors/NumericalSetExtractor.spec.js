const NumericalSetExtractor = require('@/extractors/NumericalSetExtractor');

describe('Numerical Set Extractor', () => {
  it('Deve retornar 5 numeros pares', () => {
    const ex = new NumericalSetExtractor();
    ex.setBet([2, 3, 4, 6, 7, 9, 11, 12, 16, 17, 19, 20, 21, 23, 24]);
    const res = ex.process().getResult();
    expect(res.odds).toBe(7);
    expect(res.even).toBe(8);
  });
});
