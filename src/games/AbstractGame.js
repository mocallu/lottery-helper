/**
 * @class
 */
class AbstractGame {
  constructor() {
    this.blackList = [];
  }

  /**
   * Seta Black List
   * @abstract
   * @param {Array} blackList Array com itens na blacklist
   * @returns self
   */
  setBlackList(blackList) {
    this.blackList = blackList;
    return this;
  }

  /**
   * Adiciona item na array de blacklist
   * @abstract
   * @param {String} item Blacklist item
   */
  addItemOnBlacklist(item) {
    this.blackList.push(item);
  }

  /**
   * Verifica se o item está no array de black list
   * @abstract
   * @param {String | Number} item Black list item key
   * @returns Boolean
   */
  isItemOnBlackList(item) {
    return this.blackList.includes(item);
  }
}

module.exports = AbstractGame;
