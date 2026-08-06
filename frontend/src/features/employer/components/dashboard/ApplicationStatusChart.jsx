import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";


import useApplicationStatus 
from "@/features/employer/hooks/useApplicationStatus";





export default function ApplicationStatusChart(){



    const {
        data,
        isLoading
    } = useApplicationStatus();






    if(isLoading){

        return (

            <div className="
            bg-white
            rounded-2xl
            border
            p-6
            ">

                Loading chart...

            </div>

        );

    }






    const chartData =
    data?.data || [];







    return (


        <div className="
        bg-white
        rounded-2xl
        border
        border-slate-200
        p-6
        shadow-sm
        ">



            <div className="mb-5">


                <h2 className="
                text-lg
                font-semibold
                text-slate-900
                ">

                    Application Status

                </h2>



                <p className="
                text-sm
                text-slate-500
                ">

                    Candidate hiring pipeline

                </p>


            </div>









            <div className="
            h-[300px]
            ">



                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >



                    <PieChart>



                        <Pie

                            data={chartData}

                            dataKey="value"

                            nameKey="name"

                            cx="50%"

                            cy="50%"

                            innerRadius={70}

                            outerRadius={100}

                            paddingAngle={5}

                        >


                            {
                                chartData.map(
                                    (entry,index)=>(

                                    <Cell

                                    key={`cell-${index}`}

                                    />

                                    )
                                )
                            }



                        </Pie>





                        <Tooltip />



                        <Legend />




                    </PieChart>




                </ResponsiveContainer>



            </div>





        </div>


    );


}