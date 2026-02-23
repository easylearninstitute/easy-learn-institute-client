import { Link } from "react-router";
import { FaClock, FaMoneyBillWave, FaBriefcase } from "react-icons/fa";
import web from '../../assets/Web-Development.png'
import graphics from '../../assets/Graphic-Design.png'
import ui from '../../assets/UI-UX-Design.png'
import digital from '../../assets/Digital-Marketing.png'
import cloud from '../../assets/Cloud-Computing-Cybersecurity.png'
import data from '../../assets/Data-Science-Machine-Learning.png'

const AllPrograms = () => {
    const programs = [
        {
            id: 1,
            image: web
        },
        {
            id: 2,
            image: graphics
        },
        {
            id: 3,
            image: ui
        },
        {
            id: 4,
            image: digital
        },
        {
            id: 5,
            image: cloud
        },
        {
            id: 6,
            image: data
        },

    ]

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold mb-10">আমাদের সকল প্রোগ্রাম</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programs.map(program => (
                    <div key={program.id} className="bg-white shadow rounded-xl p-6">
                        <img src={program.image} alt="" />

                        <div className="flex justify-center mt-10">
                            <Link
                                to={`/programDetails/${program.id}`}
                                className="btn btn-primary"
                            >
                                বিস্তারিত দেখুন
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPrograms;