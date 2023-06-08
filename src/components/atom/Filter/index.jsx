//Filter component
import React, { useState } from 'react';
import { useSearchMovieQuery } from 'src/services/Api';
import { useDispatch } from 'react-redux';

const FilterComponent = ({ filter, handleFilter }) => {

    return (
        <div className="px-6 sm:px-16 md:px-36 py-8">
            <ul className='flex w-1/4 m-auto justify-between'>
                {
                    filter.map((item, index) => (
                        <li
                            key={index}
                            className='text-white hover:font-bold hover:cursor-pointer hover:underline'
                            onClick={(e) => handleFilter(item, e)}
                        >
                            <span>{item}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FilterComponent