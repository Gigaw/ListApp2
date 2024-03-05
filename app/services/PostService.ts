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
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({id}) => ({type: 'Post' as const, id})), 'Post']
          : ['Post'],
    }),
    fetchDetailPost: build.query<Post, number>({
      query: id => ({
        url: `posts/${id}`,
      }),
    }),
    updatePost: build.mutation<Post, number>({
      // note: an optional `queryFn` may be used in place of `query`
      query: id => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(
        postId,
        {dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry},
      ) {
        try {
          const {data: deletedPost} = await queryFulfilled;
          console.log('deletedPost', deletedPost);
          const deleteResult = dispatch(
            postAPI.util.updateQueryData('getPostsByUserId', postId, draft => {
              console.log('draft', draft);
              // Object.assign(draft, deletedPost);
            }),
          );
        } catch {}
      },
    }),
  }),
});

export const {useGetPostsByUserIdQuery, useFetchDetailPostQuery} = postAPI;
