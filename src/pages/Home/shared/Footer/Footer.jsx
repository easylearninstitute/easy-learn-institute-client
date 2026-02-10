import React from 'react';
import logo from '../../../../assets/Logo.PNG'
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-accent mt-20 py-10">
            <div className='mx-auto max-w-7xl w-11/12'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left'>
                    <div className='flex flex-col gap-2 justify-center items-center md:items-start'>
                        <Link to="/" className="text-xl">
                            <img src={logo} alt="" className='w-14 h-14' />
                        </Link>
                        <div className='mt-10'>
                            <p className='font-bold mb-3'>Join the community</p>
                            <p className='text-sm'>Learn about new Skills and discounts</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h6 className="font-bold">Company</h6>
                        <Link to="/about" className="link link-hover">About</Link>
                        <Link to="/courses" className="link link-hover">Courses</Link>
                        <Link to="/admission" className="link link-hover">Admission</Link>
                        <Link to="/webinar" className="link link-hover">Webinar</Link>
                        <Link to="/success-story" className="link link-hover">Success Story</Link>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h6 className="font-bold">Address</h6>
                        <p className='text-sm'>Email: easylearninstitute64@gmail.com</p>
                        <p className='text-sm'>Phone: +8809617449909</p>
                        <p className='text-sm'>Hazibag Dhal, Joydebpur, Gazipur,Dhaka.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-4 justify-center items-center mt-10 pt-10 border-t border-primary/10'>
                    <Link to="/" className="font-bold text-xl hover:text-secondary">EasyLearn Institute</Link>
                    <p className='text-sm'>@ Copyright 2024 | All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;