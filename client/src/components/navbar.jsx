import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="h-16 bg-slate-700 text-slate-50 p-3 place-content-center">
            <Link to="/" className='duration-150 p-3 font-semibold text-2xl'>FitLog</Link>

            <Link to="http://jorrelrajan.com" className='p-3 font-light text-xl float-right'>Jorrel Rajan</Link>
            
            <Link to="/signup" className='p-3 font-light text-xl float-right'>Sign Up</Link>
            <Link to="/login" className='p-3 font-light text-xl float-right'>Log In</Link>
        </nav>
    );
};

export default Navbar;

