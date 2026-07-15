import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { loginUser } from "@/api/auth.api";


export default function useLogin(){


    const navigate = useNavigate();



    return useMutation({


        mutationFn:loginUser,



        onSuccess:(data)=>{


            localStorage.setItem(

                "token",

                data.data.token

            );



            toast.success(
                "Login successful"
            );



            const role =
            data.data.user.role;



            if(role==="ADMIN"){

                navigate("/admin/dashboard");

            }
            else if(role==="STUDENT"){

                navigate("/student/dashboard");

            }
            else if(role==="EMPLOYER"){

                navigate("/employer/dashboard");

            }


        },



        onError:(error)=>{


            toast.error(

                error.response?.data?.message
                ||
                "Login failed"

            );


        }

    });


}