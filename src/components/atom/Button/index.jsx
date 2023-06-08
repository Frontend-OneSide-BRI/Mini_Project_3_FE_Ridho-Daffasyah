//Button Components
import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({text}) => {
    return (
            <button
                className={
                    `${text !== "Explore" ? "mt-0" : "mt-5"} ${text === "Sign In" ? "w-full" : ""} bg-blue-400 px-6 sm:px-5 pb-1 sm:py-2 rounded-md hover:bg-blue-500`
                }
            >
                <Link className='text-white font-bold text-[10px] sm:text-base' to={text === "Login"  ? "/login" : "/movies"} >
                    {text}
                </Link>
            </button>
    );
};

export default Button;