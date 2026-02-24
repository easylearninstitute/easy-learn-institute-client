import { useLoaderData, useParams } from "react-router";

const ProgramDetails = () => {
    const programs = useLoaderData();
    const { id } = useParams();

    console.log(programs)

    const program = programs.find(
        p => p.id === Number(id)
    );

    if (!program) {
        return <h2>Programs Not Found</h2>;
    }

    return (
        <div>
            <h1>{program.title}</h1>
        </div>
    );
};

export default ProgramDetails;