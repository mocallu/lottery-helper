const LotofacilGame = require('@/games/LotofacilGame');
const lotofacilBets = require('../data/lotofacil-bets.json');

describe('Lotofacil Game', () => {
  const game = new LotofacilGame();
  game.setBlackList(lotofacilBets);
  game.addItemOnBlacklist(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16].toString()
  );

  it('Deve retornar que é uma sequencia ruim', () => {
    const bet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const isGood = game.areGoodSequencies(bet);
    expect(isGood).toBeFalsy();
  });

  it('Deve retornar que é uma boa sequencia', () => {
    const bet = [1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 15, 19, 23, 24, 25];
    const isGood = game.areGoodSequencies(bet, [], 20);
    expect(isGood).toBeTruthy();
  });

  it('Deve retornar que o numero requerido existe na aposta', () => {
    const bet = [1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 15, 19, 23, 24, 25];
    const isRequired = game.isRequiredNumberPresent(bet, [23]);
    expect(isRequired).toBeTruthy();

    const isTrueNoRequiredNumber = game.isRequiredNumberPresent(bet);
    expect(isTrueNoRequiredNumber).toBeTruthy();
  });

  it('Deve gerar uma nova aposta aplicando as regras', () => {
    game.setRules({
      sequencyMaxSize: 5,
      requiredNumbers: [20],
      requiredSequencies: [[1, 2, 3]],
    });
    const bet = game.createBet();
    expect(bet.filter((i) => i === 20).shift()).toBeTruthy();
    expect(bet).toHaveLength(game.betLength);
  });
});
