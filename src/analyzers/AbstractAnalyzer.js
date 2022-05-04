const SequencyExtractor = require('../extractors/SequencyExtractor');

/**
 * @class
 */
class AbstractAnalizer {
  /**
   * Retorna quantas vezes um número apareceu em um array de várias apostas
   * @abstract
   * @param {Array} bets Array com os numeros das apostas
   * @param {Number} number Número a ser verificado
   * @returns Number
   */
  howManyTimesANumberAppear(bets, number) {
    let total = 0;
    bets.forEach((bet) => {
      if (bet.filter((n) => n === number).shift()) {
        total += 1;
      }
    });
    return total;
  }

  /**
   * Retorna quantas vezes uma sequencia apareceu em um array de várias apostas
   * @abstract
   * @param {Array} bets Array de apostas
   * @param {Array} sequency Sequencia de numeros parte da aposta
   * @returns Number
   */
  howManyTimesASequencyAppear(bets, sequency) {
    let total = 0;
    bets.forEach((bet) => {
      const sequencExtractor = new SequencyExtractor(bet);
      const sequencies = sequencExtractor.setBet(bet).process().getResult();
      if (
        sequencies
          .filter((seq) => seq.toString() === sequency.toString())
          .shift()
      ) {
        total += 1;
      }
    });
    return total;
  }
}

module.exports = AbstractAnalizer;
