import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {postAPI} from '../services/PostService';

import {authPersistedReducer} from './reducers/AuthSlice';
import {userAPI} from '../services/UserService';
import {commentAPI} from '../services/CommentService';
import persistStore from 'redux-persist/es/persistStore';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist';

const rootReducer = combineReducers({
  auth: authPersistedReducer,
  [postAPI.reducerPath]: postAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [commentAPI.reducerPath]: commentAPI.reducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(postAPI.middleware, userAPI.middleware, commentAPI.middleware),
  });
};

const store = setupStore();
export default store;
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];
