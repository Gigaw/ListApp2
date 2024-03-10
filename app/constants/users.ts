interface User {
  password: string;
  id: number;
}
type UsersData = Record<string, User>;

export const USERS_DATA: UsersData = {
  user1: {
    password: 'password1',
    id: 1,
  },
  user2: {
    password: 'password2',
    id: 2,
  },
  user3: {
    password: 'password3',
    id: 3,
  },
  user4: {
    password: 'password4',
    id: 4,
  },
  user5: {
    password: 'password5',
    id: 5,
  },
};
