import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <ClimbingBoxLoader />
        </div>
    );
};

export default Loading;