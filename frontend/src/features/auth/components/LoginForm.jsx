import { Link } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import useLogin from "../hooks/useLogin";


export default function LoginForm() {


  const loginMutation = useLogin();


  const [showPassword, setShowPassword] = useState(false);



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

    loginMutation.mutate(formData);

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





        <div className="relative">


          <Input

            id="password"

            name="password"

            type={showPassword ? "text" : "password"}

            value={formData.password}

            onChange={handleChange}

            placeholder="••••••••"

            autoComplete="current-password"

            className="pr-10"

            required

          />



          <button

            type="button"

            onClick={() => setShowPassword(!showPassword)}

            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"

          >


            {

              showPassword

              ?

              <EyeOff size={18} />

              :

              <Eye size={18} />

            }


          </button>


        </div>



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