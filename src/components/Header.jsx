import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='h-20  items-center flex justify-between bg-gray-800 text-white px-20'>
                <h1>Digital work</h1>
                <ul className='flex gap-4'>
                    <Link to="/" >Homne</Link>
                    <Link to="/Register" >Register</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;