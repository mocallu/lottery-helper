/**
 * @class
 */
class AbstractExtractor {
  /**
   * Constructor
   * @param {String | Array | Object} bet Valor usado para extração
   */
  constructor() {
    this.result = '';
  }

  /**
   * Seta o valor da propriedade bet
   * @abstract
   * @param {Array} bet Array com numeros da aposta
   * @returns self
   */
  setBet(bet) {
    this.bet = bet;
    return this;
  }

  /**
   * Process
   * @abstract
   * @returns self
   */
  process() {
    return this;
  }

  /**
   * Get Result
   * @abstract
   * @returns String
   */
  getResult() {
    return this.result;
  }
}

module.exports = AbstractExtractor;
