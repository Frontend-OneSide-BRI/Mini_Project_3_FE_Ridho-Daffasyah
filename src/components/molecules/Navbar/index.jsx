//Navbar components
import React from 'react';
import { Link } from 'react-router-dom';

//Import components
import Button from 'src/components/atom/Button';

const Navbar = ({isLogin}) => {
    return (
        <nav
            className="h-24 w-full flex flex-row items-center justify-between py-8 sm:px-36 absolute z-[1]"
        >
            <div className='h-full w-full flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0'>
                <Link to="/">
                    <img src="/logo/logo-aniflix.png" alt="Logo Aniflix" className='w-[100px] sm:w-[150px]' />
                </Link>
                {(!isLogin && isLogin !== null) && <Button text="Login" />}
                {
                    isLogin &&
                    <div className='flex flex-row gap-6'>
                            <Link className="text-white font-bold" to="/movies">
                                <span>
                                    Movies
                                </span>
                            </Link>
                            <Link className="text-white font-bold" to="/favorites">
                                <span>
                                    Favorite
                                </span>
                            </Link>
                            <Link className="text-white font-bold" to="/bookmark">
                                <span>
                                    Bookmark
                                </span>
                            </Link>
                    </div>
                }
                {
                    isLogin === null && <></>
                }
            </div>
        </nav>
    );
};

export default Navbar;
