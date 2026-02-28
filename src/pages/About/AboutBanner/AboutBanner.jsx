import React from 'react';
import Typewriter from 'typewriter-effect';
import students from '../../../assets/Student.webp'

const AboutBanner = () => {
    return (
        <div>
            <div className='text-4xl text-center font-bold text-primary'>
                <Typewriter
                    options={{
                        strings: ['Welcome to EasyLearn Institute'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>

            <div>
                <h1 className='text-xl font-semibold mb-10 text-center text-secondary'>
                    <Typewriter
                        options={{
                            strings: ['শিখুন ডিজিটাল দক্ষতা, গড়ুন নিজের ভবিষ্যৎ'],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                        }}
                    />
                </h1>
                <img className='rounded-xl w-full' src={students} alt="Students" />
            </div>
        </div>
    );
};

export default AboutBanner;