import {
    Building2
} from "lucide-react";


export default function DashboardHeader(){

    return (

        <div
        className="
        bg-white
        border
        border-slate-200
        rounded-2xl
        p-6
        flex
        justify-between
        items-center
        shadow-sm
        "
        >


            <div>

                <h1
                className="
                text-3xl
                font-bold
                text-slate-900
                "
                >

                    Welcome back, ABC Technologies

                </h1>


                <p
                className="
                mt-2
                text-slate-500
                "
                >

                    Track your internship hiring performance

                </p>


            </div>



            <div
            className="
            h-14
            w-14
            rounded-full
            bg-blue-100
            flex
            items-center
            justify-center
            text-blue-600
            "
            >

                <Building2
                size={28}
                />

            </div>


        </div>

    );

}