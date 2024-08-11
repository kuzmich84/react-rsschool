import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = '61ba9e64';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.omdbapi.com/',
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ search, page }) => {
        return {
          url: `?apikey=${API_KEY}&s=${search}&page=${page}`,
        };
      },
    }),
  }),
});
