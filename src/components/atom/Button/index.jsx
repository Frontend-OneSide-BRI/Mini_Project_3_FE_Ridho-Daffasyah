//Button Components
import React from 'react';

const Button = ({text}) => {
    return (
        <div>
            <button
                className={
                    `${text !== "Explore" ? "mt-0" : "mt-5"} bg-blue-400 px-6 sm:px-5 pb-1 sm:py-2 rounded-md hover:bg-blue-500`
                }
            >
                <span className='text-white font-bold text-[10px] sm:text-base'>
                    {text}
                </span>
            </button>
        </div>
    );
};

export default Button;