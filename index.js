// const Download = require('./src/Download');
const LotofacilGame = require('./src/games/LotofacilGame');
const lotofacilBets = require('./data/lotofacil-bets.json');

// const download = new Download('./data');
// download.all('lotofacil');

const game = new LotofacilGame();
game.setBlackList(lotofacilBets);
Array.from(Array(12)).forEach(() => {
  const bet = game.createBet();
  console.log(bet);
});
