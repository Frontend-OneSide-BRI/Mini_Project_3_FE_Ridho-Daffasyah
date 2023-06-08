//Movies pages
import React, {useState} from 'react';
import { Card } from 'src/components/atom';
import { Navbar } from 'src/components/molecules';
import { useGetPopularMovieQuery, useSearchMovieQuery } from 'src/services/Api';
import { useDispatch } from 'react-redux';

const MoviesPages = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');

    //Popular Movie
    const dataPopularFull = useGetPopularMovieQuery();
    const dataPopular = dataPopularFull?.data;
    
    //Search Movie
    const dataSearchFull = useSearchMovieQuery(searchQuery);
    const dataSearch = dataSearchFull?.data;

    const handleSearch = (e) => {
        e.preventDefault();
        //Remove hidden class from search movie
        const searchMovie = document.getElementById('search-movie');
        searchMovie.classList.remove('hidden');

        //Add hidden class from popular movie
        const popularMovie = document.getElementById('popular-movie');
        popularMovie.classList.add('hidden');

        //Check if search query is empty
        if (e.target.value === '') {
            //Remove hidden class from popular movie
            popularMovie.classList.remove('hidden');

            //Add hidden class from search movie
            searchMovie.classList.add('hidden');
        }

        setSearchQuery(e.target.value)
        dispatch({
            type: 'SET_SEARCH',
            payload: dataSearch,
        });
    };        

    console.log(dataPopularFull);

    return (
        <div className='h-full w-full bg-black'>
            <Navbar isLogin={true} />
            <div className="px-6 sm:px-16 md:px-36 pt-32">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full py-2 px-5 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
                    placeholder="Search movies..."
                />
            </div>
            <div className='px-6 sm:px-16 md:px-36 py-4 hidden' id="search-movie">
                <h1 className='text-white text-2xl font-bold mb-[20px]'>Search Movies</h1>
                <div
                    className='flex w-full flex-wrap hover:cursor-pointer items-center justify-center'>
                    {dataSearch?.results.map((item, index) => (
                        <Card item={item} key={index} />
                    ))}
                </div>
            </div>
            <div className='px-6 sm:px-16 md:px-36 py-4' id="popular-movie">
                <h1 className='text-white text-2xl font-bold mb-[20px]'>Popular Movies</h1>
                <div
                    className='flex w-full flex-wrap hover:cursor-pointer items-center justify-center'>
                    {dataPopular?.results.slice(0, 12).map((item, index) => (
                        <Card item={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MoviesPages;