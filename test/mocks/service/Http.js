module.exports = {
  get: (path) => {
    if ('/invalid-path' === path) {
      return {
        statusCode: 404,
      };
    }
    if ('https://invalid-url' === path) {
      throw 'invalid_url';
    }
    return {
      statusCode: 200,
    };
  },
  post: (path) => {
    if ('/invalid-path' === path) {
      return {
        statusCode: 404,
      };
    }
    if ('https://invalid-url' === path) {
      throw 'invalid_url';
    }
    return {
      statusCode: 200,
    };
  },
};
