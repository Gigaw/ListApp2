import AsyncStorage from '@react-native-async-storage/async-storage';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

import {User} from '@app/models/Auth';

interface AuthState {
  userId: number | null;
  user: User | null;
  isAuthorized: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: AuthState = {
  userId: null,
  user: null,
  isAuthorized: false,
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authFetching(state) {
      state.isLoading = true;
    },
    authFetchingSuccess(state, action: PayloadAction<User>) {
      state.isLoading = false;
      state.isAuthorized = true;
      state.error = '';
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthorized = false;
      state.user = null;
    },
    authFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearError(state) {
      state.error = '';
    },
    setIsAuthorized(state, action: PayloadAction<boolean>) {
      state.isAuthorized = action.payload;
    },
  },
});

export const authPersistedReducer = persistReducer(
  {
    key: authSlice.name,
    storage: AsyncStorage,
  },
  authSlice.reducer,
);
export const {setIsAuthorized, authFetchingSuccess, authFetchingError, logout} =
  authSlice.actions;
