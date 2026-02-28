import React from 'react';
import Marquee from 'react-fast-marquee';

const Marque = () => {
    return (
        <div className=''>
            <Marquee>
                <div className='bg-gray-200 py-3 text-primary'>
                    <span>
                        " || সেমিস্টার অনুযায়ী ভর্তির বিশেষ সুযোগ + ৩ দিনের মেগা অফার চলছে! || Next-Gen Web Development Program Alpha 103 || ফ্রিল্যান্সিং সহ প্রজেক্ট-ভিত্তিক রিয়েল ক্যারিয়ার পাথ। নতুন ব্যাচ শুরু: ১লা এপ্রিল!"
                    </span>
                </div>
            </Marquee>
        </div>
    );
};

export default Marque;