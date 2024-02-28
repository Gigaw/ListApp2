import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {Todo} from '@app/models/Todo';

export const todoAPI = createApi({
  reducerPath: 'TodoAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: build => ({
    getTodosByUserId: build.query<Todo[], number>({
      query: userId => ({
        url: `/todos?userId=${userId}`,
      }),
    }),
  }),
});

export const {useGetTodosByUserIdQuery} = todoAPI;
