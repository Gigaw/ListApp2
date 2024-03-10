import {USERS_DATA} from '@app/constants/users';

export const findUserData = (
  login: string,
  password: string,
): number | null => {
  if (Object.keys(USERS_DATA).includes(login)) {
    const user = USERS_DATA[login as keyof typeof USERS_DATA];
    if (user.password === password) {
      return user.id;
    }
  }
  return null;
};
