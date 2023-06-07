//Banner component
import React from 'react';

//Import components
import Button from 'src/components/atom/Button';

const Banner = () => {
    return (
        <section className='h-full w-full'>
            <div className='h-full w-full flex flex-row items-center justify-center'>
                <div className='h-full w-full flex flex-col items-center justify-center bg-black opacity-[0.9]'>
                    <img className='h-full w-full object-cover absolute opacity-[0.3] sm:opacity-[0.4]' src='/images/haikyuu-1.jpg' alt='haikyuu' />
                    <div className='h-full w-full absolute z-10 flex flex-col items-center justify-center sm:px-5'>
                        <h1
                            className='font-extrabold text-white text-lg sm:text-4xl drop-shadow'
                        >
                            Unlimited Movies, Anime, and more
                        </h1>
                        <span
                            className='font-bold text-white text-md sm:text-xl mt-[10px] drop-shadow'
                        >
                            Watch anywhere. Cancel anytime.
                        </span>
                        <span
                            className='font-bold text-white text-md sm:text-xl mt-[10px] drop-shadow'
                        >
                            Ready to watch? Let's explore the movies.
                        </span>
                        <Button text='Explore' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;