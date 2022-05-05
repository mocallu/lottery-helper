const AbstractGame = require('./AbstractGame');
const SequencyExtractor = require('../extractors/SequencyExtractor');

/**
 * @class
 * @extends AbstractGame
 */
class LotofacilGame extends AbstractGame {
  constructor() {
    super();
    this.ticket = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ];
    this.betLength = 15;
    this.rules.sequencyMaxSize = 5;
    this.rules.requiredSequencies = [];
    this.rules.requiredNumbers = [];
  }

  /**
   * Verifica se a aposta é um bom jogo
   * @param {Array} bet Jogo
   * @example
   * const bet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
   * lotofacilGame.isAGoodGame(bet);
   * // returns false
   * @returns Boolean
   */
  isAGoodGame(bet) {
    if (
      !super.isItemOnBlackList(bet.toString()) &&
      this.areGoodSequencies(
        bet,
        this.rules.requiredSequencies,
        this.rules.sequencyMaxSize
      ) &&
      this.isRequiredNumberPresent(bet, this.rules.requiredNumbers)
    ) {
      return true;
    }
    return false;
  }

  /**
   * Verifica se a aposta possui os numeros requeridos
   * @param {Array} bet Aposta
   * @param {Array} requiredNumbers Numeros requeridos
   * @returns Bollean
   */
  isRequiredNumberPresent(bet, requiredNumbers = []) {
    if (requiredNumbers.length === 0) {
      return true;
    }
    let isPresent = false;
    bet.forEach((number) => {
      if (requiredNumbers.includes(number)) {
        isPresent = true;
      }
    });

    return isPresent;
  }

  /**
   * Verifica se sequencias da aposta são boas
   * @example
   * const bet = [1, 2, 4, 5, 7, 8, 10, 12, 13, 15, 16, 18, 19, 21, 22];
   * lotofacilGame.areGoodSequencies(bet);
   * // returns false
   * @param {Array} bet Aposta
   * @returns Boolean
   */
  areGoodSequencies(bet, requiredSequencies = [], sequencyMaxSize = []) {
    let areGoodSequencies = true;
    const sequencyExtractor = new SequencyExtractor();
    const sequencies = sequencyExtractor.setBet(bet).process().getResult();

    // Verifica tamanho maximo da sequencia
    if (sequencies.filter((seq) => seq.length > sequencyMaxSize).shift()) {
      areGoodSequencies = false;
    }

    // Verifica se existe ao menos uma sequencia requerida
    if (requiredSequencies.length > 0) {
      let haveRequiredSequency = false;
      const requiredSeqs = requiredSequencies.map((seq) => seq.toString());
      sequencies.forEach((s) => {
        const seq = s.toString();
        if (requiredSeqs.includes(seq)) {
          haveRequiredSequency = true;
        }
      });
      if (!haveRequiredSequency) {
        areGoodSequencies = false;
      }
    }

    return areGoodSequencies;
  }

  /**
   * Gera uma aposta randomica
   * @param {Array} ticket
   * @returns Object
   */
  generateRandomBet(ticket) {
    for (let i = 1; ticket.length > this.betLength; i++) {
      const min = Math.ceil(1);
      const max = Math.floor(25);
      const randomNumber = Math.floor(Math.random() * (max - min)) + min;
      if (ticket.includes(randomNumber)) {
        ticket = ticket.filter((n) => n !== randomNumber);
      }
    }
    ticket.sort((a, b) => a - b);
    return ticket;
  }

  /**
   * Cria uma aposta
   * @example
   * lotofacilGame.createBet();
   * // returns [1, 3, 6, 7, 8, 9, 11, 13, 14, 15, 18, 19, 22, 24, 25]
   * @returns Array
   */
  createBet() {
    let badGame = true;
    let bet = [];
    while (badGame) {
      bet = this.generateRandomBet(this.ticket);
      if (this.isAGoodGame(bet)) {
        badGame = false;
      }
    }
    return bet;
  }
}

module.exports = LotofacilGame;
