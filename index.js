const fs = require('fs');
// const Download = require('./src/Download');
const LotofacilGame = require('./src/games/LotofacilGame');
const LotofacilAnalyzer = require('./src/analyzers/LotofacilAnalyzer');
const lotofacilBets = require('./data/lotofacil-bets.json');
// const lotofacilResume = require('./data/lotofacil-resume.json');

// const download = new Download('./data');
// download.all('lotofacil');

// const game = new LotofacilGame();
// game.setBlackList(lotofacilBets);

// const betRules = {
//   sequencyMaxSize: 6,
//   requiredNumbers: [],
//   requiredSequencies: lotofacilResume.winningSequencies
//     .map((i) => {
//       if (i.times < 100) {
//         return false;
//       }
//       return i.sequency.split(',').map((n) => parseInt(n));
//     })
//     .filter((i) => i),
// };
// game.setRules(betRules);

// Array.from(Array(1)).forEach(() => {
//   const bet = game.createBet();
//   console.log(bet);
// });

// let good = false;
// let trys = 1;
// const win = [2, 3, 4, 6, 7, 9, 11, 12, 16, 17, 19, 20, 21, 23, 24];
// const casas = Array.from(Array(100)).map((n, i) => parseInt(`${i}00000`));

// while (!good) {
//   const res = game.createBet();
//   game.addItemOnBlacklist(res.bet);
//   const numbers = res.bet.filter((n) => win.includes(n));
//   if (numbers.length === 13) {
//     good = true;
//     console.log('aposta', win);
//     console.log('jogo', res.bet);
//     console.log('tentativas', trys);
//     console.log('numbers', numbers);
//     trys = 0;
//   }
//   if (casas.includes(trys)) {
//     console.log(trys);
//   }
//   trys += 1;
// }

const bets = lotofacilBets.map((bet) => {
  return bet.split(',').map((n) => parseInt(n));
});
const lotofacilAnalyzer = new LotofacilAnalyzer();
const resume = lotofacilAnalyzer.getResume(bets);

fs.writeFile(
  `./data/lotofacil-resume.json`,
  JSON.stringify(resume),
  'utf8',
  () => {}
);
