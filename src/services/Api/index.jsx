import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API_KEY } from 'src/api';

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        //Get Popular Movie
        getPopularMovie: builder.query({
            query: () => `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
        }),
        //Search Movie
        searchMovie: builder.query({
            query: (search) => `search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`,
        }),
        //Get Movie By Id
        getMovieById: builder.query({
            query: (id) => `/movie/${id}?api_key=${API_KEY}`,
        }),
    }),
});

export const {
    useGetPopularMovieQuery,
    useSearchMovieQuery,
    useGetMovieByIdQuery,
} = tmdbApi;
