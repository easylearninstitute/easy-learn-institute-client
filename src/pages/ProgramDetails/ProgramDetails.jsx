import React from 'react';
import {
    FaClock,
    FaMoneyBillWave,
    FaDownload,
    FaCheckCircle,
    FaTools,
    FaBriefcase,
} from "react-icons/fa";

const ProgramDetails = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16">

            {/* Header */}
            <section className="mb-12">
                <h1 className="text-4xl font-bold mb-4">
                    ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট প্রোগ্রাম
                </h1>
                <p className="text-gray-600 text-lg">
                    শূন্য থেকে শুরু করে একজন দক্ষ ওয়েব ডেভেলপার হিসেবে ক্যারিয়ার গড়ার সম্পূর্ণ প্রোগ্রাম
                </p>
            </section>

            {/* Key Info */}
            <section className="grid md:grid-cols-3 gap-6 mb-12">
                <InfoCard icon={<FaClock />} title="সময়কাল" value="৬ মাস" />
                <InfoCard icon={<FaMoneyBillWave />} title="কোর্স ফি" value="১৫,০০০ টাকা" />
                <InfoCard icon={<FaBriefcase />} title="ক্যারিয়ার আউটকাম" value="Web Developer / Freelancer" />
            </section>

            {/* About Program */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">প্রোগ্রাম সম্পর্কে</h2>
                <p className="text-gray-700 leading-relaxed">
                    এই প্রোগ্রামটি এমনভাবে ডিজাইন করা হয়েছে যাতে একজন শিক্ষার্থী কোনো পূর্ব অভিজ্ঞতা ছাড়াই
                    ধাপে ধাপে একজন পেশাদার ওয়েব ডেভেলপার হয়ে উঠতে পারে।
                    বাস্তব প্রজেক্ট, লাইভ ক্লাস এবং মেন্টর সাপোর্টের মাধ্যমে শেখানো হবে।
                </p>
            </section>

            {/* Who Can Join */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">এই প্রোগ্রামটি কার জন্য?</h2>
                <ul className="space-y-3 text-gray-700">
                    <ListItem text="একদম নতুন শিক্ষার্থীদের জন্য" />
                    <ListItem text="বিশ্ববিদ্যালয় বা কলেজের শিক্ষার্থীদের জন্য" />
                    <ListItem text="ফ্রিল্যান্সিং শুরু করতে আগ্রহীদের জন্য" />
                    <ListItem text="চাকরির জন্য স্কিল আপগ্রেড করতে চান এমনদের জন্য" />
                </ul>
            </section>

            {/* Curriculum */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">প্রোগ্রাম সিলেবাস</h2>

                <div className="space-y-4 text-gray-700">
                    <Module title="মডিউল ১: HTML, CSS ও Web Basics" />
                    <Module title="মডিউল ২: JavaScript Fundamentals" />
                    <Module title="মডিউল ৩: React & Frontend Development" />
                    <Module title="মডিউল ৪: Backend Basics & API" />
                    <Module title="মডিউল ৫: Real World Projects" />
                    <Module title="মডিউল ৬: Freelancing & Job Preparation" />
                </div>

                {/* Download Curriculum */}
                <a
                    href="https://drive.google.com/file/d/1gmomS6l7yU0fEGN3IcpSAVZqt9kVDETy/view?usp=sharing"
                    download
                    className="inline-flex items-center gap-2 mt-6 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
                >
                    <FaDownload />
                    সম্পূর্ণ সিলেবাস ডাউনলোড করুন (PDF)
                </a>
            </section>

            {/* Tools */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">যেসব টুল ও টেকনোলজি শিখবেন</h2>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <Tool text="HTML5, CSS3, Tailwind CSS" />
                    <Tool text="JavaScript (ES6+)" />
                    <Tool text="React.js" />
                    <Tool text="Git & GitHub" />
                    <Tool text="Basic Backend & API" />
                    <Tool text="Deployment & Hosting" />
                </div>
            </section>

            {/* Career */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">ক্যারিয়ার সুযোগ</h2>
                <p className="text-gray-700">
                    এই প্রোগ্রাম শেষ করার পর আপনি নিচের যেকোনো ক্যারিয়ার পথে এগিয়ে যেতে পারবেন:
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                    <ListItem text="জুনিয়র ওয়েব ডেভেলপার (চাকরি)" />
                    <ListItem text="ফ্রিল্যান্স ওয়েব ডেভেলপার" />
                    <ListItem text="স্টার্টআপ বা প্রজেক্ট বেসড কাজ" />
                </ul>
            </section>

            {/* CTA */}
            <section className="bg-yellow-100 p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">
                    আপনার ক্যারিয়ার শুরু করার সেরা সময় এখনই
                </h3>
                <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300">
                    এখনই ভর্তি হন
                </button>
            </section>

        </div>
    );
}

/* ================= Reusable Components ================= */

function InfoCard({ icon, title, value }) {
    return (
        <div className="bg-white shadow rounded-xl p-6 text-center">
            <div className="text-3xl text-blue-600 mb-2 mx-auto">{icon}</div>
            <h4 className="font-semibold">{title}</h4>
            <p className="text-gray-700">{value}</p>
        </div>
    );
}

function ListItem({ text }) {
    return (
        <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-600" />
            {text}
        </li>
    );
}

function Module({ title }) {
    return (
        <div className="bg-gray-100 p-4 rounded-lg">
            {title}
        </div>
    );
}

function Tool({ text }) {
    return (
        <div className="flex items-center gap-2">
            <FaTools className="text-blue-600" />
            {text}
        </div>
    );
};

export default ProgramDetails;