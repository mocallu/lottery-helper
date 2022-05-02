module.exports = {
  source: {
    includePattern: '.+\\.js(doc|x)?$',
    include: ['src/'],
    exclude: ['node_modules'],
  },
  plugins: ['plugins/markdown'],
  opts: {
    encoding: 'utf8',
    destination: 'docs/',
    recurse: true,
    verbose: true,
    template: 'node_modules/docdash',
  },
  templates: {
    cleverLinks: false,
    monospaceLinks: false,
  },
  sourceType: 'module',
  recurseDepth: 10,
};
