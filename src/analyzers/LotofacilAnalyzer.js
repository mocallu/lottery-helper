const AbstractAnalizer = require('./AbstractAnalyzer');
const SequencyExtractor = require('../extractors/SequencyExtractor');

/**
 * @class
 * @extends AbstractAnalyzer
 */
class LotofacilAnalyzer extends AbstractAnalizer {
  getResume(bets) {
    const winningNumbers = [];
    const winningSequencies = {};

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
        winningSequencies[sequency.toString()] = total;
      });
    });

    return {
      winningNumbers,
      winningSequencies,
    };
  }
}

module.exports = LotofacilAnalyzer;
