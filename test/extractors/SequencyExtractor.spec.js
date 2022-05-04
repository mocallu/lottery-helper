const SequencyExtractor = require('@/extractors/SequencyExtractor');

describe('Sequency Extractor', () => {
  it('Deve extrair arrays de sequencias de numeros de uma array', () => {
    const sequencies = [
      [1, 2],
      [4, 5, 6],
      [8, 9, 10, 11, 12],
    ];
    const ex = new SequencyExtractor();
    const res = ex
      .setBet([].concat(sequencies[0], sequencies[1], sequencies[2]))
      .process()
      .getResult();
    expect(res).toHaveLength(3);
    expect(res[0]).toHaveLength(sequencies[0].length);
    expect(res[1]).toHaveLength(sequencies[1].length);
    expect(res[2]).toHaveLength(sequencies[2].length);
  });
});
