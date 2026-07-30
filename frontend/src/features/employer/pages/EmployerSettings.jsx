import {
    LogOut,
    User
} from "lucide-react";

import { useNavigate } from "react-router-dom";


export default function EmployerSettings(){


    const navigate = useNavigate();



    const user = JSON.parse(
        localStorage.getItem("user")
    );




    const handleLogout = ()=>{


        localStorage.removeItem("token");

        localStorage.removeItem("user");


        navigate("/login");


    };





    return (

        <div className="space-y-6">


            <h1 className="text-2xl font-bold">
                Employer Settings
            </h1>






            {/* ACCOUNT INFORMATION */}


            <div
            className="
            bg-white
            border
            rounded-xl
            p-6
            shadow-sm
            "
            >


                <div className="flex items-center gap-3 mb-5">


                    <User
                    className="text-blue-600"
                    size={22}
                    />


                    <h2 className="text-lg font-semibold">
                        Account Information
                    </h2>


                </div>






                <div className="space-y-3 text-sm">


                    <p>

                        <span className="font-medium">
                            Name:
                        </span>

                        {" "}

                        {user?.name || "Employer User"}

                    </p>





                    <p>

                        <span className="font-medium">
                            Email:
                        </span>

                        {" "}

                        {user?.email || "Not available"}

                    </p>





                    <p>

                        <span className="font-medium">
                            Role:
                        </span>

                        {" "}

                        Employer

                    </p>



                </div>



            </div>









            {/* LOGOUT SECTION */}


            <div
            className="
            bg-white
            border
            rounded-xl
            p-6
            shadow-sm
            "
            >



                <h2 className="text-lg font-semibold mb-4">

                    Session

                </h2>





                <button

                onClick={handleLogout}

                className="
                flex
                items-center
                gap-2
                bg-red-600
                text-white
                px-5
                py-2
                rounded-lg
                hover:bg-red-700
                transition
                "

                >


                    <LogOut size={18}/>


                    Logout


                </button>



            </div>





        </div>

    );

}