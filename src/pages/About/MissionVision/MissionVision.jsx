import React from 'react';
import { FaRocket } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const MissionVision = () => {
    const missionText = "To provide a flexible and supportive learning environment that empowers students to reach their full potential through innovative technology and community-driven mentorship.";
    const vissionText = "To become the world's most trusted digital learning ecosystem, bridging the gap between education and career success by making knowledge accessible to every corner of the globe.";
    return (
        <div className='max-w-7xl mx-auto py-16'>
            <h2 className='text-2xl font-bold mb-8 text-center'>Our Mission and Vission</h2>
            <div className='flex flex-col md:flex-row'>
                <div className='bg-gray-100 p-8 rounded-2xl border border-gray-200'>
                    <FaRocket className='text-3xl text-blue-500 mb-3' />
                    <h3 className='text-xl font-bold mb-4'>Our Mission</h3>
                    <p className='text-sm'>{missionText}</p>
                </div>
                <div className='m-4'></div>
                <div className='bg-blue-500 p-8 rounded-2xl border border-blue-600 text-white'>
                    <FaEye className='text-3xl  mb-3' />
                    <h3 className='text-xl font-bold mb-4'>Our Visson</h3>
                    <p className='text-sm'>{vissionText}</p>
                </div>
            </div>
        </div>
    );
};

export default MissionVision;