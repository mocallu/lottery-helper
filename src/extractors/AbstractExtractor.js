/**
 * @class AbstractExtractor
 */
class AbstractExtractor {
  /**
   * Constructor
   * @param {String | Array | Object} value Valor usado para extração
   */
  constructor(value) {
    this.value = value;
    this.result = '';
  }

  /**
   * Process
   * @returns self
   */
  process() {
    return this;
  }

  /**
   * Get Result
   * @returns String
   */
  getResult() {
    return this.result;
  }
}

module.exports = AbstractExtractor;
