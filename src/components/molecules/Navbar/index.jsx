//Navbar components
import React from 'react';

//Import components
import Button from 'src/components/atom/Button';

const Navbar = () => {
    return (
        <div className="h-20 w-full flex flex-row items-center justify-between px-36 absolute z-10">
            <div className='flex flex-row items-center justify-between w-full'>
                <img src="/logo-aniflix.png" alt="Logo Aniflix" className='w-[150px]' />
                <Button text="Login"/>
            </div>
        </div>
    );
};

export default Navbar;
