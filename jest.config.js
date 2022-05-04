module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'json'],
  displayName: 'Unit',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: ['node_modules'],
  coverageReporters: ['lcov', 'text'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', '!src/Config.js', '!node_modules/'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
