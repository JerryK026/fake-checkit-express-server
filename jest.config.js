module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  testEnvironment: 'node',
  moduleNameMapper: {
    '@exypress/(.*)': '<rootDir>/exypress/$1',
    '@common/(.*)': '<rootDir>/common/$1',
    '@src/(.*)': '<rootDir>/src/$1',
  },
};
