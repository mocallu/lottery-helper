const fs = require('fs');
// const Download = require('./src/Download');
const LotofacilGame = require('./src/games/LotofacilGame');
const LotofacilAnalyzer = require('./src/analyzers/LotofacilAnalyzer');
const lotofacilBets = require('./data/lotofacil-bets.json');

// const download = new Download('./data');
// download.all('lotofacil');

const game = new LotofacilGame();
game.setBlackList(lotofacilBets);
Array.from(Array(1)).forEach(() => {
  const bet = game.createBet();
  console.log(bet);
});

// const bets = lotofacilBets.map((bet) => {
//   return bet.split(',').map((n) => parseInt(n));
// });
// const lotofacilAnalyzer = new LotofacilAnalyzer();
// const resume = lotofacilAnalyzer.getResume(bets);

// fs.writeFile(
//   `./data/lotofacil-resume.json`,
//   JSON.stringify(resume),
//   'utf8',
//   () => {}
// );
