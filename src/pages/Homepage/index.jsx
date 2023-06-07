//Login pages
import React from 'react';

//Import components
import { Navbar, Banner, Footer } from 'src/components/molecules';
import Line from 'src/components/atom/Line';
import { Features } from 'src/components/molecules';

//import data
import { FEATURES_DATA } from 'src/constants/constants';

const Homepage = () => {
    return (
        <div className='h-screen w-full'>
            <Navbar />
            <Banner />
            <Line />
            <div className='w-full flex flex-row items-center sm:px-36 px-0 py-10 bg-black'>
                <h1 className='font-extrabold text-white text-xl sm:text-4xl m-auto'>Features</h1>
            </div>
            <Line />
            {
                FEATURES_DATA.map((feature, index) => {
                    return <Features feature={feature} index={index} />
                })
            }
            <Footer />
        </div>
    );
};

export default Homepage;
