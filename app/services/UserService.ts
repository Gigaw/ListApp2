import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {User} from '../models/Auth';

export const userAPI = createApi({
  reducerPath: 'UserAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: build => ({
    getUserById: build.query<User, number>({
      query: userId => ({
        url: `/users/${userId}`,
      }),
    }),
  }),
});

export const {useGetUserByIdQuery} = userAPI;
