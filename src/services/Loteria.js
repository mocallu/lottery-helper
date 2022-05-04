const Http = require('./Http');
const Config = require('../Config');

/**
 * @class
 */
class Loteria {
  /**
   * Constructor
   */
  constructor() {
    this.client = new Http(Config.api);
    this.games = [
      'mega-sena',
      'lotofacil',
      'quina',
      'lotomania',
      'timemania',
      'dupla-sena',
      'loteria-federal',
      'dia-de-sorte',
      'super-sete',
    ];
  }

  /**
   * Retorna resultados de jogos das loterias da caixa
   * @param {String} game Tipo do Jogo
   * @param {String | Number} gameNumber Numero do jogo ou "latest"
   */
  getResults(game, gameNumber = '') {
    if (!this.games.includes(game)) {
      throw 'invalid_game';
    }
    if (!gameNumber) {
      return this.client.get(`/${game}`);
    }
    return this.client.get(`/${game}/${gameNumber}`);
  }
}

module.exports = Loteria;
