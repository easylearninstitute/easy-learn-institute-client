import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";
import { FaPeopleGroup } from "react-icons/fa6";

const Offer = () => {
    const offers = [
        {
            icon: <FaCalendarAlt />,
            title: "Flexible class",
            dis: "Schedule your learning around your life. Our on-demand video lessons and live weekend sessions fit any lifestyle.",
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Learn from Anywhere",
            dis: "Access our platform from your desktop, tablet, or mobile phone. Education that travels with you across the world.",
        },
        {
            icon: <MdSupportAgent />,
            title: "Active support System",
            dis: "Our 24/7 student success team and dedicated mentors are always here to help you through challenging topics.",
        },
        {
            icon: <LuAlarmClock />,
            title: "Upcoming Courses",
            dis: "Stay ahead of the curve with our monthly curriculum updates focused on AI, Blockchain, and modern technologies.",
        },
        {
            icon: <FaPeopleGroup />,
            title: "Office & Learning culture",
            dis: "We foster a culture of inclusively and continuous growth. Our team lives by the same values we teach—curiosity, empathy, and innovation.",
        },
    ];
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {offers.map((offer) => {
                    // const icon = offer.icon;
                    return (
                        <div className="">
                            <div className="border border-gray-200 rounded p-6">
                                {/* <div className="w-content">
                <FaPeopleGroup className="text-4xl bg-blue-50 p-2 rounded" />
                <div className="text-4xl bg-blue-500 p-2 rounded w-fit">{offer.icon}</div>
              </div> */}
                                <div className="inline-flex items-center justify-center text-4xl bg-blue-100 p-2 rounded">
                                    <span className="text-blue-500">{offer.icon}</span>
                                </div>
                                <h3 className="font-bold text-xl my-4">{offer.title}</h3>
                                <p className="text-sm">{offer.dis}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Offer;