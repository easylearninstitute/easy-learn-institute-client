import React from 'react';
import Typewriter from 'typewriter-effect';
import students from '../../../assets/Student.webp'

const AboutBanner = () => {
    return (
        <div style={{ backgroundImage: `url(${students})` }}>
            <div className='bg-black/80  min-h-100 flex flex-col justify-center items-center'>
                <div className='text-4xl text-center font-bold text-primary mt-10'>
                    <Typewriter
                        options={{
                            strings: ['Welcome to EasyLearn Institute'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <div className='text-xl font-semibold mb-10 text-center text-secondary'>
                    <Typewriter
                        options={{
                            strings: ['শিখুন ডিজিটাল দক্ষতা, গড়ুন নিজের ভবিষ্যৎ'],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;