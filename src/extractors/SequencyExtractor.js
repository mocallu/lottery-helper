const AbstractExtractor = require('./AbstractExtractor');

/**
 * @class SequencyExtractor
 * @extends AbstractExtractor
 */
class SequencyExtractor extends AbstractExtractor {
  /**
   * Constructor
   * @param {Array} value Valor usado no extrator
   */
  constructor(value) {
    super(value);
    this.result = [];
  }

  /**
   * Retorna sequencia de números de um array de números
   * @param {Array} arr Array com numeros para serem processados
   * @returns Array
   */
  getSequencies(arr) {
    const ret = [];
    let sequencies = '';
    arr.forEach((number, index) => {
      const nextNumber = arr[index + 1];
      if (nextNumber && nextNumber === number + 1) {
        sequencies += `${number},`;
        return;
      }
      sequencies += `${number}|`;
    });
    const result = sequencies.split('|');
    result.forEach((value) => {
      if (!value) {
        return;
      }
      ret.push(value.split(',').map((n) => parseInt(n)));
    });
    return ret;
  }

  /**
   * Processa extração de numeros sequenciais
   * @returns self
   */
  process() {
    this.result = this.getSequencies(this.value);
    return super.process();
  }
}

module.exports = SequencyExtractor;
