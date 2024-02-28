import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';

import {albumAPI} from '@app/services/AlbumService';
import {commentAPI} from '@app/services/CommentService';
import {photoAPI} from '@app/services/PhotoService';
import {postAPI} from '@app/services/PostService';
import {userAPI} from '@app/services/UserService';

import {authPersistedReducer} from './reducers/AuthSlice';

const rootReducer = combineReducers({
  auth: authPersistedReducer,
  [postAPI.reducerPath]: postAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [commentAPI.reducerPath]: commentAPI.reducer,
  [albumAPI.reducerPath]: albumAPI.reducer,
  [photoAPI.reducerPath]: photoAPI.reducer,
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
      }).concat(
        postAPI.middleware,
        userAPI.middleware,
        commentAPI.middleware,
        albumAPI.middleware,
        photoAPI.middleware,
      ),
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
