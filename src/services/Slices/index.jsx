import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    success: false,
    request_token: '',
    popularMovie: [],
    searchMovie: [],
    favoriteMovie: [],
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        //Popular Movie
        setPopularMovie: (state, action) => {
            state.popularMovie = action?.payload;
        },
        //Search Movie
        setSearchMovie: (state, action) => {
            state.searchMovie = action?.payload;
        },
        //Favorite Movie
        setFavoriteMovie: (state, action) => {
            state.favoriteMovie.push(action.payload)
        },
        //Remove Favorite Movie
        removeFavoriteMovie: (state, action) => {
            state.favoriteMovie = state.favoriteMovie.filter((item) => item.id !== action.payload.id)
        }
    }
});

export const { setPopularMovie, setSearchMovie, setFavoriteMovie, removeFavoriteMovie } = moviesSlice.actions;
export default moviesSlice.reducer;

export const selectPopularMovie = (state) => state.movies.popularMovie;
export const selectSearchMovie = (state) => state.movies.searchMovie;
export const selectFavoriteMovie = (state) => state.movies.favoriteMovie;

