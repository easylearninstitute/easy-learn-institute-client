import React from 'react';

const Hero = () => {
    return (
        <section className="bg-linear-to-r from-accent via-primary/50 to-accent text-primary py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    সহজে শিখুন, আত্মবিশ্বাসের সাথে এগিয়ে যান
                </h1>
                <p className="text-lg mb-8">
                    Easy Learn Institute আপনাকে দিচ্ছে দক্ষতা উন্নয়নের জন্য মানসম্মত ও বাস্তবমুখী কোর্স।
                </p>
                <button className="bg-primary text-accent px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-primary">
                    কোর্সসমূহ দেখুন
                </button>
            </div>
        </section>
    );
};

export default Hero;