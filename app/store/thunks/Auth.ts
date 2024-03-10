import {findUserData} from '@app/utils/auth';

import {
  authFetchingError,
  authFetchingSuccess,
  authSlice,
} from '../reducers/AuthSlice';
import {AppDispatch} from '../store';

export const logIn =
  (login: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.authFetching());
      const userId = findUserData(login, password);
      if (userId !== null) {
        console.log(userId);
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users/' + userId,
        );
        let user;
        if (response.ok) {
          user = await response.json();
        } else {
          dispatch(authFetchingError('Ошибка HTTP: ' + response.status));
        }
        dispatch(authFetchingSuccess(user));
      } else {
        dispatch(authFetchingError('invalid username or password'));
      }
    } catch (e: any) {
      dispatch(authSlice.actions.authFetchingError(e.message));
    }
  };
