//Feature Text component
import React from "react";

const Featuretext = ({feature}) => {
    return (
        <div className='flex flex-col items-center md:text-right md:items-end justify-between w-full mt-[30px] md:mt-0'>
            <h1 className='font-extrabold text-white text-xl sm:text-xl md:text-2xl lg:text-4xl'>{feature.headline}</h1>
            <span className='font-bold text-gray-200 text-xs sm:text-base md:text-lg lg:text-xl mt-[10px] px-4 sm:px-0'>{feature.description}</span>
        </div>
    )
};

export default Featuretext;