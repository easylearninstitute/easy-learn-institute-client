import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../../../assets/Logo.PNG'
import './Navbar.css'

const Navbar = () => {
    const links = <>
        <li><NavLink to='/' className="rounded-xl font-semibold px-4">Home</NavLink></li>
        <li><NavLink to='/programs' className="rounded-xl font-semibold px-4">Programs</NavLink></li>
        <li><NavLink to='/about' className="rounded-xl font-semibold px-4">About</NavLink></li>
        <li><NavLink to='/admission' className="rounded-xl font-semibold px-4">Admission</NavLink></li>
        <li><NavLink to='/webinar' className="rounded-xl font-semibold px-4">Webinar</NavLink></li>
        <li><NavLink to='/success-stories' className="rounded-xl font-semibold px-4">Success Stories</NavLink></li>
    </>
    return (
        <div className="bg-accent text-primary shadow-sm w-full sticky top-0 z-50 backdrop-blur-xl left-0">
            <div className='navbar max-w-7xl  mx-auto w-11/12 px-0'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="text-xl flex items-center gap-2">
                        <img src={logo} alt="" className='w-12 h-12' />
                        <p className='font-bold text-nowrap hidden sm:block'>EasyLearn <span className='text-secondary'>Institute</span></p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className="btn btn-primary">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;