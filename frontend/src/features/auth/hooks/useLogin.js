import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { loginUser } from "@/api/auth.api";
import { useAuth } from "@/context/AuthContext";


export default function useLogin(){

    const navigate = useNavigate();

    const { login } = useAuth();



    return useMutation({

        mutationFn: loginUser,


        onSuccess:(response)=>{


            console.log(
                "LOGIN SUCCESS:",
                response
            );


            const user = response.data.user;

            const token = response.data.token;



            login(
                user,
                token
            );



            toast.success(
                "Login successful"
            );



            // Redirect based on role

            if(user.role === "ADMIN"){

                navigate("/admin/dashboard");

            }
            else if(user.role === "STUDENT"){

                navigate("/student/dashboard");

            }
            else if(user.role === "EMPLOYER"){

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