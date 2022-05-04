const Request = require('request');

/**
 * @class
 */
class Http {
  /**
   * Constructor
   * @param {Object} params
   */
  constructor(params) {
    this.request = Request;
    this.config = {
      baseUrl: params.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
      json: true,
    };
  }

  /**
   * Get
   * @param {String} path
   * @returns Promise
   */
  get(path) {
    return new Promise((resolve, reject) => {
      this.request.get(path, this.config, (error, response) => {
        if (error) {
          reject(error);
        }
        resolve(response);
      });
    });
  }

  /**
   * Post
   * @param {String} path
   * @param {Object} data
   * @returns Promise
   */
  post(path, data) {
    return new Promise((resolve, reject) => {
      this.request
        .post(path, this.config, (error, response) => {
          if (error) {
            reject(error);
          }
          resolve(response);
        })
        .form(data);
    });
  }
}

module.exports = Http;
