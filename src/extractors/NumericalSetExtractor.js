const AbstractExtractor = require('./AbstractExtractor');

/**
 * @class
 * @extends AbstractExtractor
 */
class NumericalSetExtractor extends AbstractExtractor {
  constructor() {
    super();
    this.result = {};
  }

  /**
   * Retorna quantos numeros pares e impares a array possui
   * @param {Array} arr Array com numeros para serem processados
   * @returns Objecy
   */
  getSet(arr) {
    return {
      odds: arr.filter((n) => n % 2 === 0).length,
      even: arr.filter((n) => n % 2 !== 0).length,
    };
  }

  /**
   * Processa extração de numeros sequenciais
   * @returns self
   */
  process() {
    this.result = this.getSet(this.bet);
    return super.process();
  }
}

module.exports = NumericalSetExtractor;
