//Navbar components
import React from 'react';

//Import components
import Button from 'src/components/atom/Button';

const Navbar = () => {
    return (
        <nav
            className="h-24 w-full flex flex-row items-center justify-between py-8 sm:px-36 absolute z-[1]"
        >
            <div className='h-full w-full flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0'>
                <img src="/logo/logo-aniflix.png" alt="Logo Aniflix" className='w-[100px] sm:w-[150px]' />
                <Button text="Login"/>
            </div>
        </nav>
    );
};

export default Navbar;
