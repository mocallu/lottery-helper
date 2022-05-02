const LotofacilGame = require('@/games/LotofacilGame');

describe('Lotofacil Game', () => {
  const game = new LotofacilGame();
  game.setBlackList([]);
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
    const isGood = game.areGoodSequencies(bet);
    expect(isGood).toBeTruthy();
  });

  it('Deve gerar uma nova aposta', () => {
    const bet = game.createBet();
    console.log(bet);
    expect(bet).toHaveLength(game.betLength);
  });
});
