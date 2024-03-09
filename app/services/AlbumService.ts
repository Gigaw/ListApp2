import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {Album} from '@app/models/Album';

export const albumAPI = createApi({
  reducerPath: 'AlbumAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  tagTypes: ['Album'],
  endpoints: build => ({
    getAlbumsByUserId: build.query<Album[], number>({
      query: userId => ({
        url: `/albums?userId=${userId}`,
      }),
    }),
    updateAlbum: build.mutation<Album, Partial<Album>>({
      query: album => ({
        url: `/albums/${album.id}`,
        method: 'PUT',
        body: album,
      }),
      async onQueryStarted({id, userId}, {dispatch, queryFulfilled}) {
        try {
          const {data: updatedAlbum} = await queryFulfilled;
          dispatch(
            albumAPI.util.updateQueryData(
              'getAlbumsByUserId',
              userId as number,
              draftAlbums => {
                const album = draftAlbums.find(el => el.id === id);
                Object.assign(album ?? {}, updatedAlbum);
              },
            ),
          );
        } catch {}
      },
    }),
    deleteAlbum: build.mutation<void, number>({
      query: id => ({
        url: `/albums/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(albumID, {dispatch, queryFulfilled}) {
        try {
          const userId = 1;
          await queryFulfilled;
          dispatch(
            albumAPI.util.updateQueryData(
              'getAlbumsByUserId',
              userId as number,
              draftAlbums => {
                const albumIndex = draftAlbums.findIndex(
                  el => el.id === albumID,
                );
                draftAlbums.splice(albumIndex, 1);
              },
            ),
          );
        } catch {}
      },
    }),
  }),
});

export const {
  useUpdateAlbumMutation,
  useGetAlbumsByUserIdQuery,
  useDeleteAlbumMutation,
} = albumAPI;
