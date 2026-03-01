import React from 'react';

const AboutUs = () => {
    const textOne = "Founded in 2010, EduLearn began with a simple but profound idea: that high-quality education should be a right, not a privilege. We recognized the barriers that traditional education often presents—cost, location, and rigid scheduling—and set out to build a platform that dismantles them.";
    const textTwo = "What started as a small team of three educators in a garage has grown into a global community of over 5 million learners and 500+ expert instructors. Today, we are proud to offer industry-recognized certifications and skills-based training that help professionals pivot careers and students achieve their academic dreams.";
    return (
        <div className='py-16 text-center max-w-7xl mx-auto'>
            <h2 className='text-2xl mb-4 font-bold'>About us and about story</h2>
            <p>{textOne}</p>
            <div className='my-6'></div>
            <p>{textTwo}</p>

        </div>
    );
};

export default AboutUs;