//Button Components
import React from 'react';

const Button = ({text}) => {
    return (
        <div>
            <button
                className="bg-blue-300 px-5 py-2 rounded-md hover:bg-blue-500"
            >
                <span className='text-white font-bold'>
                    {text}
                </span>
            </button>
        </div>
    );
};

export default Button;