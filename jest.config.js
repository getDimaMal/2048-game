module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['html'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/index.{js,ts}'],
};
