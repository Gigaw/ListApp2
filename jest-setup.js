jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});
jest.mock('redux', () => {
  const real = jest.requireActual('redux');
  return {
    ...real,
  };
});
// jest.mock('redux-persist/es/persistStore', () => {
//   const real = jest.requireActual('redux-persist/es/persistStore');
//   return {
//     ...real,
//   };
// });
// jest.mock('redux-persist/es/persistReducer', () => {
//   const real = jest.requireActual('redux-persist/es/persistReducer');
//   return {
//     ...real,
//   };
// });

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
