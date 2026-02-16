import React from 'react';
import { FaBriefcase, FaClock, FaMoneyBillWave } from 'react-icons/fa';
import { Link } from 'react-router';

const AllPrograms = () => {

    const programs = [
        {
            title: "ওয়েব ডেভেলপমেন্ট প্রোগ্রাম",
            duration: "৬ মাস",
            fee: "১৫,০০০ টাকা",
            outcome: "জুনিয়র ওয়েব ডেভেলপার / ফ্রিল্যান্সার",
        },
        {
            title: "React ও ফ্রন্টএন্ড ডেভেলপমেন্ট",
            duration: "৪ মাস",
            fee: "১২,০০০ টাকা",
            outcome: "ফ্রন্টএন্ড ডেভেলপার",
        },
        {
            title: "JavaScript মাস্টারি",
            duration: "৩ মাস",
            fee: "৮,০০০ টাকা",
            outcome: "JavaScript ডেভেলপার",
        },
        {
            title: "ডাটা স্ট্রাকচার ও অ্যালগরিদম",
            duration: "৫ মাস",
            fee: "১০,০০০ টাকা",
            outcome: "সফটওয়্যার ইঞ্জিনিয়ার প্রস্তুতি",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold mb-4">আমাদের সকল প্রোগ্রাম</h1>
            <p className="text-gray-600 mb-10">
                ক্যারিয়ার গঠনের জন্য পরিকল্পিত সম্পূর্ণ প্রোগ্রামসমূহ
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                {programs.map((program, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
                    >
                        <h2 className="text-2xl font-semibold mb-4">
                            {program.title}
                        </h2>

                        <div className="space-y-2 text-gray-700">
                            <p className="flex items-center gap-2">
                                <FaClock className="text-blue-600" />
                                সময়কাল: {program.duration}
                            </p>
                            <p className="flex items-center gap-2">
                                <FaMoneyBillWave className="text-green-600" />
                                কোর্স ফি: {program.fee}
                            </p>
                            <p className="flex items-center gap-2">
                                <FaBriefcase className="text-purple-600" />
                                ক্যারিয়ার সুযোগ: {program.outcome}
                            </p>
                        </div>

                        <button className="mt-6 bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300">
                            এখনই ভর্তি হন
                        </button>
                        <Link to='/programDetails' className="mt-6 bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300">
                            বিস্তারিত দেখুন
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPrograms;