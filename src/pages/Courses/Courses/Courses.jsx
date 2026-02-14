import React from 'react';

const programs = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-6">Our programs</h2>
            <ul className="grid md:grid-cols-3 gap-6">
                <li className="p-6 bg-white shadow rounded">Web Development</li>
                <li className="p-6 bg-white shadow rounded">React & Frontend</li>
                <li className="p-6 bg-white shadow rounded">Data Structures</li>
            </ul>
        </div>
    );
};

export default programs;