/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Para garantir que o Jest não execute os arquivos compilados:
  roots: ['<rootDir>/src']
};
