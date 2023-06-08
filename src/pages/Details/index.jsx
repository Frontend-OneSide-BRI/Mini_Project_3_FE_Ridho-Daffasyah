//Detail pages
import React from 'react'
import { useParams } from 'react-router-dom';

//Import components
import { Navbar } from 'src/components/molecules'

import { useGetMovieByIdQuery } from 'src/services/Api';
import { BASE_IMAGE_URL } from 'src/api';

const DetailPages = () => {
    const { id } = useParams();

    const { data, error, isLoading } = useGetMovieByIdQuery(id);

    return (
        <div>
            <Navbar isLogin={true} />
            <div className='h-full w-full bg-black'>
                <div className='px-6 sm:px-16 md:px-36 pt-36' id="detail-movie">
                    <h1 className='text-white text-2xl font-bold mb-[30px]'>Detail Movies</h1>
                {
                    isLoading ? (
                        <div className='flex justify-center items-center'>
                            <p className='text-white text-2xl font-bold'>Loading...</p>
                        </div>
                    ) : error ? (
                            <div className='flex justify-center items-center'>
                                <p className='text-white text-2xl font-bold'>Error...</p>
                        </div>
                    ) : (
                        <div className='flex justify-between gap-8 items-center'>
                            <img className="w-1/4 rounded-md" src={`${BASE_IMAGE_URL}/${data.poster_path}`} alt={data.title} />
                            <div className='flex flex-col justify-center'>
                                <p className='text-white text-3xl font-bold mb-[10px]'>{data.title}</p>
                                <p className='text-white text-xl font-base'>{data.overview}</p>   
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default DetailPages;