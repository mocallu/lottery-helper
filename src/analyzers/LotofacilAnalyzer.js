const AbstractAnalizer = require('./AbstractAnalyzer');
const SequencyExtractor = require('../extractors/SequencyExtractor');
const NumericalSetExtractor = require('../extractors/NumericalSetExtractor');

/**
 * @class
 * @extends AbstractAnalyzer
 */
class LotofacilAnalyzer extends AbstractAnalizer {
  /**
   * Retorna quantidade de vezes que um numero foi sorteado
   * @param {Array} bets Array com array de apostas
   * @returns Array
   */
  getWinningNumbers(bets) {
    const winningNumbers = [];
    Array.from(Array(25)).forEach((n, index) => {
      winningNumbers.push({
        number: index + 1,
        times: this.howManyTimesANumberAppears(bets, index + 1),
      });
    });
    winningNumbers.sort((a, b) => a.times - b.times).reverse();
    return winningNumbers;
  }

  /**
   * Retorna a quantidade de vezes quem sequencia foi sorteada
   * @param {Array} bets Array com array de apostas
   * @returns Array
   */
  getWinningSequencies(bets) {
    const winningSequencies = [];
    const sequencyExtractor = new SequencyExtractor();
    bets.forEach((bet) => {
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
    winningSequencies.sort((a, b) => a.times - b.times).reverse();
    return winningSequencies;
  }

  /**
   * Retorna combinações de par e impar
   * @param {Array} bets Array com array de apostas
   * @returns Object
   */
  getNumericalSet(bets) {
    const numericalSetExtractor = new NumericalSetExtractor();
    const ret = {};
    bets.forEach((bet) => {
      const res = numericalSetExtractor.setBet(bet).process().getResult();
      const val = ret[`even:${res.even}-odds:${res.odds}`] || 0;
      ret[`even:${res.even}-odds:${res.odds}`] = val + 1;
    });
    return ret;
  }

  /**
   * Retorna resumo
   * @param {Array} bets Array com apostas
   * @returns Object
   */
  getResume(bets) {
    return {
      total: bets.length,
      winningNumbers: this.getWinningNumbers(bets),
      winningSequencies: this.getWinningSequencies(bets),
      numericalSet: this.getNumericalSet(bets),
    };
  }
}

module.exports = LotofacilAnalyzer;
