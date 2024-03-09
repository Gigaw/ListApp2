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
    updateTodoStatus: build.mutation<Todo, Partial<Todo>>({
      query: todo => ({
        url: `/todos/${todo.id}`,
        method: 'PATCH',
        body: {completed: todo.completed},
      }),
      async onQueryStarted({id, userId}, {dispatch, queryFulfilled}) {
        try {
          const {data: updatedTodo} = await queryFulfilled;
          dispatch(
            todoAPI.util.updateQueryData(
              'getTodosByUserId',
              userId as number,
              draftTodos => {
                const todos = draftTodos.find(el => el.id === id);
                Object.assign(todos ?? {}, updatedTodo);
              },
            ),
          );
        } catch {}
      },
    }),
    deleteTodo: build.mutation<void, Pick<Todo, 'id' | 'userId'>>({
      query: ({id}) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted({id: todoId, userId}, {dispatch, queryFulfilled}) {
        try {
          await queryFulfilled;
          dispatch(
            todoAPI.util.updateQueryData(
              'getTodosByUserId',
              userId as number,
              draftTodos => {
                const todoIndex = draftTodos.findIndex(el => el.id === todoId);
                draftTodos.splice(todoIndex, 1);
              },
            ),
          );
        } catch {}
      },
    }),
  }),
});

export const {
  useGetTodosByUserIdQuery,
  useDeleteTodoMutation,
  useUpdateTodoStatusMutation,
} = todoAPI;
