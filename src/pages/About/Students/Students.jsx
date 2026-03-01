import React from 'react';

const Students = () => {
    const studentStates = [
        {
            amount: 50,
            title: "Alumni Students",
        },
        {
            amount: 1000,
            title: "Running Students",
        },
        {
            amount: 200,
            title: "UpComing Students",
        },
    ];
    return (
        <div className="max-w-7xl mx-auto py-12">
            <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {studentStates.map((state) => (
                    <div className="p-8 bg-blue-200 w-60 rounded-xl ">
                        <h2 className="text-4xl font-bold text-blue-600">{state.amount}+</h2>
                        <p>{state.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Students;