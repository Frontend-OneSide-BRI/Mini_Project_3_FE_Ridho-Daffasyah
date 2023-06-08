//Login pages
import React from 'react';
import { Line } from 'src/components/atom';

//Import Components
import { Footer, Navbar, FormLogin } from 'src/components/molecules';

const Login = () => {
    return (
        <div className='overflow-x-hidden'>
            <Navbar isLogin={null} />
            <FormLogin/>
            <div className='h-full w-full bg-white bg-img opacity-[0.6] flex items-center justify-center'></div>
            <Line />
            <Footer />
        </div>
        
    );
};

export default Login;