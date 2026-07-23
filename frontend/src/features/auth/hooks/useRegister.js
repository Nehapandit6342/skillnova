import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { registerUser } from "@/api/auth.api";


export default function useRegister(){

    const navigate = useNavigate();


    return useMutation({

        mutationFn: registerUser,


        onSuccess:(data)=>{


            toast.success(

                data.message 
                ||
                "Registration successful"

            );



            navigate("/login");


        },



        onError:(error)=>{


            toast.error(

                error.response?.data?.message
                ||
                "Registration failed"

            );


        }

    });

}