import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {Post} from '@app/models/Post';

export const postAPI = createApi({
  reducerPath: 'PostAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: build => ({
    getPostsByUserId: build.query<Post[], number>({
      query: userId => ({
        url: `posts?userId=${userId}`,
      }),
    }),
    fetchDetailPost: build.query<Post, number>({
      query: id => ({
        url: `posts/${id}`,
      }),
    }),
  }),
});

export const {useGetPostsByUserIdQuery, useFetchDetailPostQuery} = postAPI;
