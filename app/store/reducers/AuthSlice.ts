import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../models/Auth';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string;
}

const initialState: AuthState = {
  user: null,
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
  },
});
