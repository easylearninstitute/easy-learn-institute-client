import { useLoaderData, useParams } from "react-router";
import { FaCheckCircle } from "react-icons/fa";

const ProgramDetails = () => {
    const programs = useLoaderData();
    const { id } = useParams();

    const program = programs.find(p => p.id === id);

    if (!program) return <p>Program not found</p>;

    return (
        <div className="max-w-5xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold mb-4">{program.title}</h1>
            <p className="text-gray-600 mb-8">{program.subtitle}</p>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">প্রোগ্রাম সম্পর্কে</h2>
                <p>{program.about}</p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">ক্যারিয়ার সুযোগ</h2>
                <ul className="space-y-2">
                    {program.careers.map((c, i) => (
                        <li key={i} className="flex gap-2">
                            <FaCheckCircle className="text-green-600" /> {c}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default ProgramDetails;