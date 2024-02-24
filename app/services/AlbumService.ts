import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Album} from '../models/Album';

export const albumAPI = createApi({
  reducerPath: 'AlbumAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: build => ({
    getAlbomsByUserId: build.query<Album[], number>({
      query: userId => ({
        url: `/albums?userId=${userId}`,
      }),
    }),
  }),
});

export const {useGetAlbomsByUserIdQuery} = albumAPI;
