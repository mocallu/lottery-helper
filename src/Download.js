const Loteria = require('./services/Loteria');
const fs = require('fs');

/**
 * @class
 */
class Download {
  /**
   * Construtor
   * @param {String} dir Pasta que os resultados serão salvos
   */
  constructor(dir) {
    this.dir = dir;
  }

  /**
   * Baixar todos os resultados do jogo
   * @param {String} game Tipo do jogo da loteria
   */
  async all(game) {
    const api = new Loteria();
    const result = await api.getResults(game);
    fs.writeFile(
      `${this.dir}/${game}.json`,
      JSON.stringify(result.body),
      'utf8',
      () => {}
    );

    fs.writeFile(
      `${this.dir}/${game}-bets.json`,
      JSON.stringify(result.body.map((i) => i.dezenas.toString())),
      'utf8',
      () => {}
    );
    return result.body;
  }
}
module.exports = Download;
