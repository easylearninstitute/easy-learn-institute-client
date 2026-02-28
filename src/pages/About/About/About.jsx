import React from 'react';
import AboutBanner from '../AboutBanner/AboutBanner';
import Mission from '../Mission/Mission';

const About = () => {
    return (
        <div className='max-w-7xl mx-auto w-11/12 my-16'>
            <AboutBanner></AboutBanner>
            <Mission></Mission>
        </div>
    );
};

export default About;