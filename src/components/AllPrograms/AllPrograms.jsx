import { Link, useLoaderData } from "react-router";
// import { FaClock, FaMoneyBillWave, FaBriefcase } from "react-icons/fa";
// import web from '../../assets/Web-Development.png'
// import graphics from '../../assets/Graphic-Design.png'
// import ui from '../../assets/UI-UX-Design.png'
// import digital from '../../assets/Digital-Marketing.png'
// import cloud from '../../assets/Cloud-Computing-Cybersecurity.png'
// import data from '../../assets/Data-Science-Machine-Learning.png'

const AllPrograms = () => {
    const programs = useLoaderData()
    console.log(programs)

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                আমাদের সকল প্রোগ্রাম
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {programs.map(program => (
                    <div key={program.id} className="bg-white shadow-lg rounded-xl hover:shadow-2xl">
                        <div className="border border-primary/20 rounded-xl">
                            <img className="w-full rounded-t-xl" src={program.image} alt="" />
                            <h2 className="text-md text-primary text-center my-4">{program.title}</h2>

                            <div className="flex justify-center mb-6">
                                <Link
                                    to={`/programDetails/${program.id}`}
                                    className="btn btn-primary"
                                >
                                    বিস্তারিত দেখুন
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPrograms;