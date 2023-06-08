//Card Component
import React, {useEffect, useState} from 'react';
import { BASE_IMAGE_URL } from 'src/api';
import { setFavoriteMovie } from 'src/services/Slices';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Card = ({ item }) => {
    const dispatch = useDispatch();
    const [isHoveredHeart, setIsHoveredHeart] = useState(false);
    const [isHoveredBookmark, setIsHoveredBookmark] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isBookmark, setIsBookmark] = useState(false);

    useEffect(() => {
        //Check if button with id btn-favorite
        const btnFavorite = document.getElementById(`btn-favorite-${item.id}`);
        const btnBookmark = document.getElementById(`btn-bookmark-${item.id}`);

        //Check if button with id btn-favorite is hovered
        if (btnFavorite) {
            btnFavorite.addEventListener('mouseover', () => {
                setIsHoveredHeart(true);
            }
            );
            btnFavorite.addEventListener('mouseout', () => {
                setIsHoveredHeart(false);
            }
            );
        }

        //Check if button with id btn-bookmark is hovered
        if (btnBookmark) {
            btnBookmark.addEventListener('mouseover', () => {
                setIsHoveredBookmark(true);
            }
            );
            btnBookmark.addEventListener('mouseout', () => {
                setIsHoveredBookmark(false);
            }
            );
        }
    }, [item]);

    useEffect(() => {
        //get favorite movies from local storage
        const favoriteMovie = JSON.parse(localStorage.getItem("favorite"));
        console.log(favoriteMovie);

        //check if favorite movies is undefined
        if (favoriteMovie === null) {
            //set favorite movies to local storage
            localStorage.setItem("favorite", JSON.stringify([]));
        }

        //check if movies is favorite
        if (favoriteMovie?.find((movie) => movie.id === item.id)) {
            setIsFavorite(true);
        }

        //get bookmark movies from local storage
        const bookmarkMovie = JSON.parse(localStorage.getItem("bookmark"));
        console.log(bookmarkMovie);

        //check if bookmark movies is undefined
        if (bookmarkMovie === null) {
            //set bookmark movies to local storage
            localStorage.setItem("bookmark", JSON.stringify([]));
        }

        //check if movies is bookmark
        if (bookmarkMovie?.find((movie) => movie.id === item.id)) {
            setIsBookmark(true);
        }
    }, [item]);

    const handleClickFavorite = (e) => {
        e.preventDefault();

        //get favorite movies from local storage
        const favoriteMovie = JSON.parse(localStorage.getItem("favorite"));

        //Check if isFavorite is true
        if (isFavorite) {
            //set favorite movies to local storage
            localStorage.setItem("favorite", JSON.stringify(favoriteMovie.filter((movie) => movie.id !== item.id)));

            //set favorite movies to redux
            dispatch(setFavoriteMovie(favoriteMovie.filter((movie) => movie.id !== item.id)));

            //set isFavorite to false
            setIsFavorite(false);

            alert('Movie has been removed from favorite');

            //Refresh page
            window.location.reload();
        } else {
            //set favorite movies to local storage
            localStorage.setItem("favorite", JSON.stringify([...favoriteMovie, item]));

            //set favorite movies to redux
            dispatch(setFavoriteMovie([...favoriteMovie, item]));

            //set isFavorite to true
            setIsFavorite(true);

            alert('Movie has been added to favorite');
        }
    }

    const handleClickBookmark = (e) => {
        e.preventDefault();

        //get bookmark movies from local storage
        const bookmarkMovie = JSON.parse(localStorage.getItem("bookmark"));

        //Check if isBookmark is true
        if (isBookmark) {
            //set bookmark movies to local storage
            localStorage.setItem("bookmark", JSON.stringify(bookmarkMovie.filter((movie) => movie.id !== item.id)));

            //set isBookmark to false
            setIsBookmark(false);

            alert('Movie has been removed from bookmark');

            //Refresh page
            window.location.reload();
        } else {
            //set bookmark movies to local storage
            localStorage.setItem("bookmark", JSON.stringify([...bookmarkMovie, item]));

            //set isBookmark to true
            setIsBookmark(true);

            alert('Movie has been added to bookmark');
        }
    }

    const navigate = useNavigate();

    return (
        <div className="w-full xs:w-[40%] sm:w-[50%] md:w-[25%] lg:w-[15%] p-7 md:p-4">
            <div className="flex items-center img-wrap">
                <img
                    src={`${BASE_IMAGE_URL}/${item.poster_path}`}
                    className="rounded object-cover transition duration-500 ease-in-out hover:opacity-70 img-each-category"
                    alt={`${item.title}`}
                />
                    <div className="img-text flex flex-col justify-between items-start gap-2">
                        <div className='flex flex-col justify-evenly gap-4 md:gap-1 lg:gap-4'>
                            <span className="text-xs md:text-[8px] lg:text-xs">Id: {item.id}</span>
                            <span className="text-md md:text-[8px] lg:text-xs">{item.title}</span>
                            <span className="text-xs md:text-[8px] lg:text-xs">Popularity: <br></br>{item.popularity}</span>
                        </div>
                    <div className='flex w-full h-full justify-end items-end gap-2'>
                            <div className='w-full h-full flex items-end' onClick={() => navigate(`/detail/${item.id}`)}>
                                <span>See Detail</span>
                            </div>
                            <div className='w-1/5' onClick={(e) =>
                                    handleClickFavorite(e)
                                    }>
                                {(isHoveredHeart || isFavorite) ?
                                    <button className='w-full' id={`btn-favorite-${item.id}`}>
                                        <img src="/icons/heart-full.png" alt="" className="w-full" />
                                    </button> :
                                <button className='w-full' id={`btn-favorite-${item.id}`} >
                                        <img src="/icons/heart.png" alt="" className="w-full"/>
                                    </button>
                                }
                            </div>
                            <div className='w-1/5' onClick={(e) =>
                                    handleClickBookmark(e)
                                    }>
                                {(isHoveredBookmark || isBookmark) ?
                                    <button className='w-full' id={`btn-bookmark-${item.id}`}>
                                        <img src="/icons/bookmark-active.png" alt="" className="w-full" />
                                    </button> :
                                    <button className='w-full' id={`btn-bookmark-${item.id}`}>
                                        <img src="/icons/bookmark.png" alt="" className="w-full"/>
                                    </button>
                                    }
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Card;