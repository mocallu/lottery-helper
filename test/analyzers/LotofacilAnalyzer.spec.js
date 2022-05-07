const LotofacilAnalizer = require('@/analyzers/LotofacilAnalyzer');

describe('LotofacilAnalyzer', () => {
  const bets = [
    [1, 2, 3, 5, 6, 7, 11, 12, 13],
    [1, 2, 3, 11, 14, 15, 17, 18],
    [1, 2, 3, 11, 13, 14, 15, 16],
  ];
  const lotofacilAnalyzer = new LotofacilAnalizer();

  it('Deve retornar quantas vezes um número apareceu em um array de apostas', () => {
    const res = lotofacilAnalyzer.howManyTimesANumberAppears(bets, 1);
    expect(res).toBe(3);
  });

  it('Deve retornar 0 se um número apareceu nenhuma vez em um array de apostas', () => {
    const res = lotofacilAnalyzer.howManyTimesANumberAppears(bets, 100);
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

  it('Deve retornar a analize das apostas', () => {
    const res = lotofacilAnalyzer.getResume(bets);
    expect(res.winningNumbers).toHaveLength(25);
    expect(res.winningSequencies).toHaveLength(6);
  });

  it('Deve retornar a quantidade de numeros pares e impares', () => {
    const an = new LotofacilAnalizer();
    const res = an.getNumericalSet([
      [2, 3, 4, 6, 7, 9, 11, 12, 16, 17, 19, 20, 21, 23, 24],
    ]);
    expect(res['even:8-odds:7']).toBe(1);
  });

  it('Deve retornar a soma dos numeros da aposta', () => {
    const an = new LotofacilAnalizer();
    const res = an.getNumbersSum([[2, 3]]);
    expect(res[0].quantidade).toBe(1);
  });
});
