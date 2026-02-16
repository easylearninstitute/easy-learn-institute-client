import React from 'react';
import { FaBook, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router';

const Features = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center text-primary">
                <Link to="/programs" className="bg-white p-6 rounded-xl shadow border border-primary/20 hover:bg-primary/10">
                    <FaBook className="text-4xl text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">মানসম্মত কোর্স</h3>
                    <p>ইন্ডাস্ট্রি ভিত্তিক ও হাতে-কলমে শেখার সুযোগ।</p>
                </Link>
                <Link to="" className="bg-white p-6 rounded-xl shadow border border-primary/20 hover:bg-primary/10">
                    <FaChalkboardTeacher className="text-4xl text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">অভিজ্ঞ মেন্টর</h3>
                    <p>দক্ষ ও অভিজ্ঞ প্রশিক্ষকদের কাছ থেকে শেখার সুযোগ।</p>
                </Link>
                <Link target='_blank' to="https://www.facebook.com/share/g/181Sbfvogt/" className="bg-white p-6 rounded-xl shadow border border-primary/20 hover:bg-primary/10">
                    <FaUsers className="text-4xl text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">লার্নার কমিউনিটি</h3>
                    <p>হাজারো শিক্ষার্থীর সাথে যুক্ত হয়ে একসাথে এগিয়ে যান।</p>
                </Link>
            </div>
        </section>
    );
};

export default Features;