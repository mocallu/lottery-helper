module.exports = {
  get: (path, conf, cb) => {
    if ('/invalid-path' === path) {
      cb(null, {
        statusCode: 404,
      });
    }
    if ('https://invalid-url' === path) {
      cb('invalid_url', null);
      return;
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
  post: (path, conf, cb) => {
    if ('/invalid-path' === path) {
      cb(null, {
        statusCode: 404,
      });
      return;
    }
    if ('https://invalid-url' === path) {
      cb('invalid_url', null);
      return;
    }
    cb(null, {
      statusCode: 200,
    });
    return;
  },
};
