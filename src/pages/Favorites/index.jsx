//Favorite pages
import React, {useState, useEffect} from 'react';

//Import components
import { Navbar } from 'src/components/molecules';
import { Card } from 'src/components/atom';

const FavoritesPages = () => {
    const [dataFavorite, setDataFavorite] = useState([]);

    useEffect(() => {
        document.title = 'Aniflix - Favorite';
        //Get favorite movies from local storage
        const favoriteMovie = JSON.parse(localStorage.getItem("favorite"));
        
        setDataFavorite(favoriteMovie);
    }, []);
    
    console.log(dataFavorite);

    return (
        <div className='h-full w-full bg-black'>
            <Navbar isLogin={true} />
            <div className='px-6 sm:px-16 md:px-36 py-36' id="favorite-movie">
                <h1 className='text-white text-2xl font-bold mb-[20px]'>Favorite Movies</h1>
                <div
                    className='flex w-full flex-wrap hover:cursor-pointer'>
                    {
                        dataFavorite.map((movie, index) => (
                            <Card
                                item={movie}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default FavoritesPages;