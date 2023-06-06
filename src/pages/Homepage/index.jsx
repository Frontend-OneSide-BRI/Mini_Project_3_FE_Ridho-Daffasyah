//Login pages
import React from 'react';

//Import components
import Navbar from 'src/components/molecules/Navbar';

const Homepage = () => {
    return (
        <div className='h-screen w-full'>
            <Navbar />
            <div className='h-full w-full bg-red-50'>
                <div className='h-full w-full flex flex-row items-center justify-center'>
                    <div className='h-full w-full flex flex-col items-center justify-center'>
                        {/* <video className='h-full w-full object-cover opacity-[0.4]' src='/Haikyuu-Final.mp4' autoPlay loop muted /> */}
                        <div className='h-full w-full absolute z-10 flex flex-col items-center justify-center'>
                            <h1 className='font-extrabold text-blue-950 text-4xl drop-shadow-xl'>Unlimited movies, TV shows, and more</h1>
                            <span className='font-bold text-blue-950 text-2xl mt-[10px]'>Watch anywhere. Cancel anytime.</span>
                            <span className='font-bold text-blue-950 text-2xl mt-[10px]'>Ready to watch? Let's explore the movies.</span>
                            <button className='h-[50px] w-[180px] rounded-md bg-blue-950 mt-[50px] text-white font-bold'>Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
