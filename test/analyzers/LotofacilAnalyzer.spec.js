const LotofacilAnalizer = require('@/analyzers/LotofacilAnalyzer');

describe('LotofacilAnalyzer', () => {
  const bets = [
    [1, 2, 3, 5, 6, 7, 11, 12, 13],
    [1, 2, 3, 11, 14, 15, 15, 18],
    [1, 2, 3, 11, 14, 15, 15, 19],
  ];
  const lotofacilAnalyzer = new LotofacilAnalizer();

  it('Deve retornar quantas vezes um número apareceu em um array de apostas', () => {
    const res = lotofacilAnalyzer.howManyTimesANumberAppear(bets, 1);
    expect(res).toBe(3);
  });

  it('Deve retornar 0 se um número apareceu nenhuma vez em um array de apostas', () => {
    const res = lotofacilAnalyzer.howManyTimesANumberAppear(bets, 100);
    expect(res).toBe(0);
  });

  it('Deve retornar quantas vezes uma sequencia apareceu em um array de apostas', () => {
    const res = lotofacilAnalyzer.howManyTimesASequencyAppear(bets, [1, 2, 3]);
    expect(res).toBe(3);
  });

  it('Deve retornar 0 se uma sequencia apareceu nenhuma vez em um array de apostas', () => {
    const res = lotofacilAnalyzer.howManyTimesASequencyAppear(bets, [1, 4, 18]);
    expect(res).toBe(0);
  });
});
