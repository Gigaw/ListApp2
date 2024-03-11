import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {Post} from '@app/models/Post';

export const postAPI = createApi({
  reducerPath: 'PostAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  tagTypes: ['Post'],
  endpoints: build => ({
    getPostsByUserId: build.query<Post[], number>({
      query: userId => ({
        url: `posts?userId=${userId}`,
      }),
      providesTags: result =>
        result
          ? [...result.map(({id}) => ({type: 'Post' as const, id})), 'Post']
          : ['Post'],
    }),
    fetchDetailPost: build.query<Post, number>({
      query: id => ({
        url: `posts/${id}`,
      }),
      providesTags: result => (result ? [{type: 'Post', id: result.id}] : []),
    }),
  }),
});

export const {useGetPostsByUserIdQuery, useFetchDetailPostQuery} = postAPI;
