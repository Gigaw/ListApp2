import AsyncStorage from '@react-native-async-storage/async-storage';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

interface AppState {
  isOnboardingShown: boolean;
}

const initialState: AppState = {
  isOnboardingShown: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsOnboardingShown(state, action: PayloadAction<boolean>) {
      state.isOnboardingShown = action.payload;
    },
  },
});

export const appPersistedReducer = persistReducer(
  {
    key: appSlice.name,
    storage: AsyncStorage,
  },
  appSlice.reducer,
);
export const {setIsOnboardingShown} = appSlice.actions;
