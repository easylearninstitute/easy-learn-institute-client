import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Hero from '../Hero/Hero';
import Features from '../Features/Features';
import AllPrograms from '../../../components/AllPrograms/AllPrograms';

const Home = () => {
    
    return (
        <div>
            <Hero></Hero>
            <Features></Features>
            <AllPrograms></AllPrograms>
        </div>
    );
};

export default Home;