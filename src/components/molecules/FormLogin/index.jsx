//FormLogin Components
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Import Components
import { Button } from 'src/components/atom';

const FormLogin = ({ reqToken }) => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: '',
        password: '',
        request_token: ''
    });

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form onSubmit={() => navigate("/movies")} className='w-[30%] bg-black rounded-xl opacity-[0.8] p-10 absolute z-[1] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-4xl font-bold text-white !text-left'>Login</h1>
            <div className='w-full flex flex-col items-center'>
                <div className='w-full flex flex-col items-start mt-10'>
                    <label className='text-white font-bold text-xl' htmlFor="username">Username</label>
                    <input className='w-full border-2 border-black rounded-md px-2 py-1 mt-2' type="text" name="username" id="username" onChange={handleChange} />
                </div>
                <div className='w-full flex flex-col items-start mt-5'>
                    <label className='text-white font-bold text-xl' htmlFor="password">Password</label>
                    <input className='w-full border-2 border-black rounded-md px-2 py-1 mt-2' type="password" name="password" id="password" onChange={handleChange}/>
                </div>
                <div className='w-full flex flex-col items-center mt-5'>
                    <Button text="Sign In"/>
                </div>
            </div>
        </form>
    );
};

export default FormLogin;