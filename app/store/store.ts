import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {postAPI} from '../services/PostService';
import {authSlice} from './reducers/AuthSlice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  [postAPI.reducerPath]: postAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(postAPI.middleware),
  });
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];
