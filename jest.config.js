module.exports = {
  clearMocks: true,

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__spec__/**/*.spec.[jt]s?(x)'],

  preset: 'ts-jest',

  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [151001],
      },
    },
  },
};
