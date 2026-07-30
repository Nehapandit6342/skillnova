import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { loginUser } from "@/api/auth.api";
import { useAuth } from "@/context/AuthContext";


export default function useLogin() {

  const navigate = useNavigate();

  const { login } = useAuth();



  return useMutation({

    mutationFn: loginUser,


    onSuccess: (response) => {


      console.log("LOGIN RESPONSE:", response);



      const data = response.data;



      const user = data.user;

      const token = data.token;



      if (!user || !token) {


        toast.error(
          "Invalid login response"
        );


        console.log(
          "Missing user/token",
          data
        );


        return;

      }




      login(
        user,
        token
      );



      toast.success(
        "Login successful"
      );



      console.log(
        "Logged User:",
        user
      );



      if(user.role === "ADMIN") {


        navigate(
          "/admin/dashboard",
          {
            replace:true
          }
        );


      }

      else if(user.role === "STUDENT") {


        navigate(
          "/student/dashboard",
          {
            replace:true
          }
        );


      }

      else if(user.role === "EMPLOYER") {


        navigate(
          "/employer/dashboard",
          {
            replace:true
          }
        );


      }

      else {


        navigate(
          "/",
          {
            replace:true
          }
        );


      }


    },


    onError:(error)=>{


      console.log(
        "LOGIN ERROR:",
        error
      );


      toast.error(

        error?.response?.data?.message
        ||
        "Login failed"

      );


    }


  });


}