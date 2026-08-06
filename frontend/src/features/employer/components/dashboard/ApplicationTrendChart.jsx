import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";


import useApplicationTrend 
from "@/features/employer/hooks/useApplicationTrend";




export default function ApplicationTrendChart(){



    const {
        data,
        isLoading
    } = useApplicationTrend();





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

                    Application Trends

                </h2>



                <p className="
                text-sm
                text-slate-500
                ">

                    Monthly internship application growth

                </p>


            </div>







            <div className="
            h-[300px]
            ">


                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >


                    <LineChart
                        data={chartData}
                    >


                        <CartesianGrid
                            strokeDasharray="3 3"
                        />



                        <XAxis

                            dataKey="month"

                        />



                        <YAxis />



                        <Tooltip />



                        <Line

                            type="monotone"

                            dataKey="applications"

                            strokeWidth={3}

                            dot={{
                                r:5
                            }}

                        />



                    </LineChart>



                </ResponsiveContainer>



            </div>





        </div>


    );


}