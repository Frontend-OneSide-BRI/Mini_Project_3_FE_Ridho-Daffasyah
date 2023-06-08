//Bookmark pages
import React, {useState, useEffect} from 'react';

//Import components
import { Navbar } from 'src/components/molecules';
import { Card } from 'src/components/atom';

const BookmarkPages = () => {
    const [dataBookmark, setDataBookmark] = useState([]);

    useEffect(() => {
        document.title = 'Aniflix - Favorite';
        //Get bookmark movies from local storage
        const bookmarkMovie = JSON.parse(localStorage.getItem("bookmark"));
        
        setDataBookmark(bookmarkMovie);
    }, []);
    
    console.log(dataBookmark);

    return (
        <div className='h-full w-full bg-black'>
            <Navbar isLogin={true} />
            <div className='px-6 sm:px-16 md:px-36 py-36' id="bookmark-movie">
                <h1 className='text-white text-2xl font-bold mb-[20px]'>Bookmark Movies</h1>
                <div
                    className='flex w-full flex-wrap hover:cursor-pointer'>
                    {
                        dataBookmark.map((movie, index) => (
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

export default BookmarkPages;