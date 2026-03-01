import React from 'react';
import AboutBanner from '../AboutBanner/AboutBanner';
import Mission from '../Mission/Mission';
import HeroAbout from '../HeroAbout/HeroAbout';
import AboutUs from '../AboutUs/AboutUs';
import MissionVision from '../MissionVision/MissionVision';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Offer from '../Offer/Offer';
import Students from '../Students/Students';

const About = () => {
    return (
        <div className=''>
            <AboutBanner></AboutBanner>
            <Mission></Mission>
            <HeroAbout></HeroAbout>
            <AboutUs></AboutUs>
            <MissionVision></MissionVision>
            <WhyChooseUs></WhyChooseUs>
            <Offer></Offer>
            <Students></Students>
        </div>
    );
};

export default About;