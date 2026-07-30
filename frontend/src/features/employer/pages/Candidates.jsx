import useCandidates from "../hooks/useCandidates";



export default function Candidates() {

    const {

        data,

        isLoading

    } = useCandidates();



    const candidates =
        data?.data || [];



    if (isLoading) {

        return (
            <p>Loading candidates...</p>
        );

    }



    return (

        <div className="space-y-6">

            <h1 className="text-2xl font-bold">

                Candidates

            </h1>



            {

                candidates.length === 0 ?

                    (

                        <div
                            className="
                            bg-white
                            border
                            rounded-xl
                            p-6
                            "
                        >

                            No candidates found.

                        </div>

                    )

                    :

                    (

                        <div className="grid gap-5">

                            {

                                candidates.map((item) => (

                                    <div

                                        key={item.id}

                                        className="
                                        bg-white
                                        border
                                        rounded-xl
                                        p-6
                                        shadow-sm
                                        "

                                    >

                                        <h2 className="text-xl font-bold">

                                            {item.student.user.name}

                                        </h2>



                                        <p className="text-gray-600">

                                            {item.student.user.email}

                                        </p>



                                        <div className="mt-4 space-y-1 text-sm">

                                            <p>

                                                Internship:

                                                {" "}

                                                {item.internship.title}

                                            </p>

                                            <p>

                                                College:

                                                {" "}

                                                {item.student.college || "N/A"}

                                            </p>

                                            <p>

                                                Degree:

                                                {" "}

                                                {item.student.degree || "N/A"}

                                            </p>

                                            <p>

                                                Skills:

                                                {" "}

                                                {

                                                    item.student.skills?.length

                                                        ?

                                                        item.student.skills.join(", ")

                                                        :

                                                        "N/A"

                                                }

                                            </p>

                                            <p>

                                                Status:

                                                {" "}

                                                <span
                                                    className="font-semibold"
                                                >
                                                    {item.status}
                                                </span>

                                            </p>

                                        </div>



                                        <div className="mt-5 flex gap-3">

                                            <button
                                                className="
                                                bg-blue-600
                                                text-white
                                                px-4
                                                py-2
                                                rounded-lg
                                                "
                                            >

                                                View Profile

                                            </button>

                                        </div>

                                    </div>

                                ))

                            }

                        </div>

                    )

            }

        </div>

    );

}