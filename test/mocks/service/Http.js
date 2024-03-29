module.exports = {
  get: (path) => {
    if ('/invalid-path' === path) {
      return Promise.resolve({
        statusCode: 404,
      });
    }
    if ('https://invalid-url' === path) {
      return Promise.reject('invalid_url');
    }
    return Promise.resolve({
      statusCode: 200,
      body: [
        {
          dezenas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      ],
    });
  },
  post: (path) => {
    if ('/invalid-path' === path) {
      return Promise.resolve({
        statusCode: 404,
      });
    }
    if ('https://invalid-url' === path) {
      return Promise.reject('invalid_url');
    }
    return Promise.resolve({
      statusCode: 200,
    });
  },
};
