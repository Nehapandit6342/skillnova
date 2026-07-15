import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import useLogin from "../hooks/useLogin";


export default function LoginForm() {


  const navigate = useNavigate();


  const loginMutation = useLogin();



  const [formData, setFormData] = useState({

    email: "",
    password: "",

  });




  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };





  const handleSubmit = (e) => {

    e.preventDefault();


    console.log("LOGIN DATA:", formData);



    loginMutation.mutate(formData, {

      onSuccess: (data)=>{


        console.log("LOGIN SUCCESS:", data);



        // save token

        localStorage.setItem(
          "token",
          data.data.token
        );



        // redirect based on role

        if(data.data.user.role === "ADMIN"){

          navigate("/admin/dashboard");

        }
        else if(data.data.user.role === "STUDENT"){

          navigate("/student/dashboard");

        }
        else if(data.data.user.role === "EMPLOYER"){

          navigate("/employer/dashboard");

        }


      }

    });


  };







  return (

    <form

      onSubmit={handleSubmit}

      className="space-y-6"

    >



      {/* Email */}

      <div className="space-y-2">


        <Label htmlFor="email">
          Email
        </Label>



        <Input

          id="email"

          name="email"

          type="email"

          value={formData.email}

          onChange={handleChange}

          placeholder="example@gmail.com"

          autoComplete="email"

          required

        />


      </div>






      {/* Password */}

      <div className="space-y-2">


        <div className="flex items-center justify-between">


          <Label htmlFor="password">
            Password
          </Label>



          <Link

            to="/forgot-password"

            className="text-sm text-blue-600 hover:underline"

          >

            Forgot Password?

          </Link>


        </div>





        <Input

          id="password"

          name="password"

          type="password"

          value={formData.password}

          onChange={handleChange}

          placeholder="••••••••"

          autoComplete="current-password"

          required

        />



      </div>







      {/* Error */}

      {
        loginMutation.isError && (

          <p className="text-sm text-red-500">


            {
              loginMutation.error?.response?.data?.message
              ||
              "Login failed"
            }


          </p>

        )
      }







      {/* Button */}


      <Button

        type="submit"

        className="w-full"

        disabled={loginMutation.isPending}

      >


        {
          loginMutation.isPending

          ?

          "Signing in..."

          :

          "Sign In"

        }


      </Button>







      <p className="text-center text-sm text-slate-600">


        Don't have an account?{" "}


        <Link

          to="/register"

          className="text-blue-600 hover:underline"

        >

          Create Account

        </Link>


      </p>





    </form>

  );

}