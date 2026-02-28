import React from 'react';
import { Target, Award, Users } from 'lucide-react';

const Mission = () => {

    const goals = [
        {
            title: "দক্ষতা উন্নয়ন",
            description: "শিক্ষার্থী ও ফ্রিল্যান্সারদের আধুনিক ডিজিটাল স্কিলে দক্ষ করে তোলা।",
            icon: <Target className="w-8 h-8 text-blue-500" />,
        },
        {
            title: "সাফল্যের পথ",
            description: "আপনার শেখার যাত্রাকে বাস্তব জীবনের ক্যারিয়ার বা ব্যবসায় রূপান্তর করা।",
            icon: <Award className="w-8 h-8 text-green-500" />,
        },
        {
            title: "উদ্যোক্তা তৈরি",
            description: "নতুন উদ্যোক্তাদের সঠিক গাইডলাইন ও কারিগরি সহায়তা প্রদান করা।",
            icon: <Users className="w-8 h-8 text-purple-500" />,
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        আমাদের লক্ষ্য
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
                        একটি বিশ্বস্ত প্রশিক্ষণ প্রতিষ্ঠান হিসেবে আমরা আজকের দ্রুত পরিবর্তনশীল বিশ্বে আপনাকে দক্ষ ও আত্মবিশ্বাসী করে গড়ে তুলতে কাজ করছি।
                    </p>
                </div>

                {/* Goals Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {goals.map((goal, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center"
                        >
                            <div className="mb-4 p-3 bg-blue-50 rounded-full">
                                {goal.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {goal.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {goal.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mission;