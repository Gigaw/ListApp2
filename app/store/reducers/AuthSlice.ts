import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../models/Auth';
import persistReducer from 'redux-persist/es/persistReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  user: User | null;
  isAuthorized: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: AuthState = {
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
      state.error = '';
      state.user = action.payload;
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
export const {setIsAuthorized} = authSlice.actions;
