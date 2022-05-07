const AbstractExtractor = require('./AbstractExtractor');

/**
 * @class
 * @extends AbstractExtractor
 */
class NumbersSumExtractor extends AbstractExtractor {
  constructor() {
    super();
    this.result = {};
  }

  /**
   * Retorna a soma de todos os números da aposta
   * @param {Array} arr Array com numeros para serem processados
   * @returns Number
   */
  getSum(arr) {
    return arr.reduce((p, c) => p + c, 0);
  }

  /**
   * Processa extração da soma dos números
   * @returns self
   */
  process() {
    this.result = this.getSum(this.bet);
    return super.process();
  }
}

module.exports = NumbersSumExtractor;
