module.exports = {
  clearMocks: true,

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__spec__/**/*.spec.[jt]s?(x)'],

  // Mock non esm
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|oga)$':
      '<rootDir>/configs/tests/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/configs/tests/__mocks__/styleMock.js',
  },

  // The support for TS inside of tests
  preset: 'ts-jest',

  setupFilesAfterEnv: ['<rootDir>/configs/tests/jest.setup.js'],
};
