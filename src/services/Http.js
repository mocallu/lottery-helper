const Request = require('request');

class Http {
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
