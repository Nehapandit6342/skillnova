import {
    TrendingUp
} from "lucide-react";


export default function StatCard({

    title,

    value,

    icon: Icon,

    description,

    trend

}) {


    return (

        <div

        className="
        bg-white
        border
        border-slate-200
        rounded-2xl
        p-6
        shadow-sm
        hover:shadow-md
        transition
        duration-300
        "

        >


            <div
            className="
            flex
            justify-between
            items-start
            "
            >



                <div>


                    <p
                    className="
                    text-sm
                    font-medium
                    text-slate-500
                    "
                    >

                        {title}

                    </p>



                    <h2
                    className="
                    mt-3
                    text-3xl
                    font-bold
                    text-slate-900
                    "
                    >

                        {value}

                    </h2>




                    <div
                    className="
                    mt-3
                    flex
                    items-center
                    gap-1
                    text-sm
                    text-green-600
                    "
                    >

                        <TrendingUp
                        size={16}
                        />


                        <span>

                            {trend || "12% increase"}

                        </span>


                    </div>




                    <p
                    className="
                    mt-2
                    text-xs
                    text-slate-400
                    "
                    >

                        {description}

                    </p>


                </div>





                <div

                className="
                bg-blue-50
                text-blue-600
                rounded-xl
                p-3
                "

                >


                    <Icon
                    size={26}
                    />


                </div>



            </div>



        </div>

    );

}