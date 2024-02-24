import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Photo} from '../models/Photo';

export const photoAPI = createApi({
  reducerPath: 'PhotoAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: build => ({
    getPhotosByAlbumId: build.query<Photo[], number>({
      query: albumId => ({
        url: `/photos?albumId=${albumId}`,
      }),
    }),
  }),
});

export const {useGetPhotosByAlbumIdQuery} = photoAPI;
