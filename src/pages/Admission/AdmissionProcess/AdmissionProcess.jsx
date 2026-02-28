// import { Link } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const AdmissionProcess = () => {
    return (
        <div className="bg-[#FFFBEB] min-h-screen py-12 px-4 md:px-10 font-sans text-primary">
            <div className="max-w-7xl mx-auto w-11/12">
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                    EasyLearn <span className='text-secondary'>Institute</span> এ ভর্তি প্রক্রিয়া
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


                    <div className="bg-accent/50 hover:bg-accent p-8 rounded-xl shadow-lg border-b-4 border-r-4 border-primary/80">
                        <h2 className="text-xl font-bold mb-4 text-primary">ধাপ ১: কোর্স নির্বাচন</h2>
                        <div className="text-black text-[15px] leading-relaxed">
                            <p className="mb-2">প্রথমে আপনি কোন কোর্সটি করতে চান তা নির্ধারণ করুন। আমাদের জনপ্রিয় কোর্সসমূহ:</p>
                            <ul className="list-none space-y-1 ml-2">
                                <li>১. ডিজিটাল মার্কেটিং</li>
                                <li>২. গ্রাফিক ডিজাইন</li>
                                <li>৩. ওয়েব ডেভেলপমেন্ট</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-accent/50 hover:bg-accent p-8 rounded-xl shadow-lg border-b-4 border-r-4 border-primary/80">
                        <h2 className="text-xl font-bold mb-4 text-primary">ধাপ ২: যোগাযোগ করুন</h2>
                        <div className="text-black text-[15px] leading-relaxed">
                            <p className="mb-4">আমাদের অফিসে আসুন বা কল করুন:</p>
                            <ul className="list-none space-y-2">
                                <li>১. মোবাইল: +8801716056506</li>
                                <li>২. ফেসবুক ইনবক্স : Fb Page: <span className="underline cursor-pointer">EasyLearn Institute</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-accent/50 hover:bg-accent p-8 rounded-xl shadow-lg border-b-4 border-r-4 border-primary/80">
                        <h2 className="text-xl font-bold mb-4 text-primary">ধাপ ৩: ভর্তি ফর্ম পূরণ</h2>
                        <div className="text-black text-[15px] leading-relaxed grow">
                            <p className="mb-6">আমাদের অফিস বা অনলাইন প্ল্যাটফর্ম থেকে ভর্তি ফর্ম পূরণ করুন।</p>
                        </div>
                        <div className='flex justify-center'>
                            <Link to="" className='btn btn-primary w-full'>Admission Form</Link>
                        </div>
                    </div>

                    <div className="bg-accent/50 hover:bg-accent p-8 rounded-xl shadow-lg border-b-4 border-r-4 border-primary/80">
                        <h2 className="text-xl font-bold mb-4 text-primary">ধাপ 8: কোর্স ফি পরিশোধ</h2>
                        <div className="text-black text-[15px] leading-relaxed flex-grow">
                            {/* <p className="mb-3">আমাদের প্রায় প্রতিটি কোর্স ৪টি সেমিস্টার এ সম্পন্ন হয়, তাই সেমিস্টার অনুযায়ী ভর্তির সুযোগ আছে এছাড়া ফুল কোর্স এ বিশেষ মূল্য ছাড়ে একবারেও ভর্তি হতে পারেন।</p> */}
                            <p className="mb-6">আপনি নগদ, বিকাশ, বা ব্যাংকের মাধ্যমে কোর্স ফি প্রদান করতে পারেন।</p>
                        </div>
                        <div className='flex justify-center'>
                            <Link to="" className='btn btn-primary w-full'>Course Payment</Link>
                        </div>
                    </div>

                    <div className="bg-accent/50 hover:bg-accent p-8 rounded-xl shadow-lg border-b-4 border-r-4 border-primary/80">
                        <h2 className="text-xl font-bold mb-4 text-primary">ধাপ ৫: ভর্তি নিশ্চিতকরণ</h2>
                        <div className="text-black text-[15px] leading-relaxed">
                            <p>ফি পরিশোধের পরে, আপনার ভর্তি নিশ্চিত করা হবে এবং ক্লাস টাইম, গ্রুপ ও অন্যান্য তথ্য জানিয়ে দেওয়া হবে।</p>
                        </div>
                    </div>

                    <div className="bg-accent/50 hover:bg-accent p-8 rounded-xl shadow-lg border-b-4 border-r-4 border-primary/80">
                        <h2 className="text-xl font-bold mb-4 text-primary">বিশেষ সুবিধা:</h2>
                        <div className="text-black text-[15px] leading-relaxed">
                            <ul className="list-none space-y-2">
                                <li>১. ফ্রি ওয়েব সেমিনার ও ক্যারিয়ার কাউন্সেলিং</li>
                                <li>২. ফ্রিল্যান্সিং ও স্টার্টআপ গাইডলাইন</li>
                            </ul>
                            {/* <div className="mt-6">
                                <p className="font-bold text-gray-800 italic">📅 এখনই ভর্তি হয়ে আপনার ক্যারিয়ার তৈরি করুন!</p>
                                <p className="text-[#1e3a8a] font-black mt-1">EasyLearn Institute — শেখা সহজ, ক্যারিয়ার সফল।</p>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdmissionProcess;