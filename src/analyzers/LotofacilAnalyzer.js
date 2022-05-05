const AbstractAnalizer = require('./AbstractAnalyzer');
const SequencyExtractor = require('../extractors/SequencyExtractor');

/**
 * @class
 * @extends AbstractAnalyzer
 */
class LotofacilAnalyzer extends AbstractAnalizer {
  getResume(bets) {
    const total = bets.length;
    const winningNumbers = [];
    const winningSequencies = [];

    Array.from(Array(25)).forEach((n, index) => {
      winningNumbers.push({
        number: index + 1,
        times: this.howManyTimesANumberAppears(bets, index + 1),
      });
    });

    bets.forEach((bet) => {
      const sequencyExtractor = new SequencyExtractor();
      const betSequencies = sequencyExtractor.setBet(bet).process().getResult();
      betSequencies.forEach((sequency) => {
        const total = this.howManyTimesASequencyAppear(bets, sequency);
        if (
          winningSequencies
            .filter((i) => i.sequency === sequency.toString())
            .shift()
        ) {
          return;
        }
        winningSequencies.push({
          sequency: sequency.toString(),
          times: total,
        });
      });
    });
    winningNumbers.sort((a, b) => a.times - b.times).reverse();
    winningSequencies.sort((a, b) => a.times - b.times).reverse();
    return {
      total,
      winningNumbers,
      winningSequencies,
    };
  }
}

module.exports = LotofacilAnalyzer;
