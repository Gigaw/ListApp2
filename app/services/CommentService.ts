import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Comment} from '../models/Comment';

export const commentAPI = createApi({
  reducerPath: 'CommentAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: build => ({
    getCommentsByPostId: build.query<Comment[], number>({
      query: postId => ({
        url: `comments?postId=${postId}`,
      }),
    }),
  }),
});

export const {useGetCommentsByPostIdQuery} = commentAPI;
