import { Link, useLoaderData, useParams } from "react-router";

const ProgramDetails = () => {
    const programs = useLoaderData();
    const { id } = useParams();

    console.log(programs)

    const program = programs.find(
        p => p.id === Number(id)
    );

    console.log(program);

    if (!program) {
        return <h2>Programs Not Found</h2>;
    }

    return (
        <div className="max-w-7xl mx-auto w-11/12 my-20">
            <div className="flex flex-col md:flex-row gap-20">
                <div className="flex-1">
                    <img className="w-full rounded-2xl" src={program.image} alt="" />
                </div>
                <div className="flex-1">
                    <h1 className="text-4xl">{program.title}</h1>
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <Link className="btn btn-primary" target="_blank" to={program.admission} >Enroll Now</Link>
            </div>
        </div>
    );
};

export default ProgramDetails;