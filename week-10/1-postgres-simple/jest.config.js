// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // Optionally, set up paths to match your project structure
    roots: ['<rootDir>/src'],
    // Transform settings if you have custom needs, but this is optional since ts-jest is preset
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    // Module file extensions for importing
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  };
  