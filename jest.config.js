module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons|react-redux|react-native-reanimated|redux|redux-persist)/)',
  ],
  // transformIgnorePatterns: ['node_modules/'],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setupFilesAfterEnv.ts',
    './jest-setup.js',
  ],
  testMatch: ['<rootDir>/app/**/*.test.ts', '<rootDir>/app/**/*.test.tsx'],
};
