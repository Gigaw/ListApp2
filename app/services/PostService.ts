import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Post} from '../models/Post';

export const postAPI = createApi({
  reducerPath: 'PostAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: build => ({
    fetchPosts: build.query<Post[], number>({
      query: (limit = 5) => ({
        url: 'posts',
        params: {
          _limit: limit,
        },
      }),
    }),
    fetchDetailPost: build.query<Post, number>({
      query: id => ({
        url: `posts/${id}`,
      }),
    }),
  }),
});
