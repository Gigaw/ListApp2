import {authSlice, setIsAuthorized} from '../reducers/AuthSlice';
import {AppDispatch} from '../store';

const correctLogin = 'admin';
const correctPassword = 'admin';

export const logIn =
  (login: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.authFetching());
      if (login === correctLogin && password === correctPassword) {
        dispatch(setIsAuthorized(true));
      } else {
        dispatch(
          authSlice.actions.authFetchingError('invalid username or password'),
        );
      }
    } catch (e: any) {
      dispatch(authSlice.actions.authFetchingError(e.message));
    }
  };
