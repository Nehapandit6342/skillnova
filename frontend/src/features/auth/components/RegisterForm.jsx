import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import RoleSelector from "./RoleSelector";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import useRegister from "../hooks/useRegister";


export default function RegisterForm() {


  const navigate = useNavigate();

  const registerMutation = useRegister();


  const [role, setRole] = useState("STUDENT");


  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);



  const [formData, setFormData] = useState({

    name: "",
    email: "",
    password: "",
    confirmPassword: "",

    college: "",
    degree: "",
    careerGoal: "",

    companyName: "",
    industry: "",
    website: "",

  });



  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };





  const handleSubmit = (e) => {

    e.preventDefault();


    if(formData.password !== formData.confirmPassword){

      alert("Passwords do not match");

      return;

    }




    const payload = {

      name: formData.name,

      email: formData.email,

      password: formData.password,

      role,



      ...(role === "STUDENT" && {

        college: formData.college,

        degree: formData.degree,

        careerGoal: formData.careerGoal,

      }),




      ...(role === "EMPLOYER" && {

        companyName: formData.companyName,

        industry: formData.industry,

        website: formData.website,

      })

    };





    registerMutation.mutate(payload, {


      onSuccess: () => {


        alert(
          "Account created successfully. Please login."
        );


        navigate("/login");


      }


    });


  };






  return (

<form
onSubmit={handleSubmit}
className="space-y-6"
>



<div className="space-y-2">

<Label>
Full Name
</Label>


<Input

name="name"

value={formData.name}

onChange={handleChange}

placeholder="John Doe"

autoComplete="name"

required

/>

</div>







<div className="space-y-2">

<Label>
Email
</Label>


<Input

name="email"

type="email"

value={formData.email}

onChange={handleChange}

placeholder="john@gmail.com"

autoComplete="email"

required

/>

</div>







<div className="grid sm:grid-cols-2 gap-4">



<div className="space-y-2">

<Label>
Password
</Label>


<div className="relative">

<Input

name="password"

type={showPassword ? "text" : "password"}

value={formData.password}

onChange={handleChange}

autoComplete="new-password"

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

<EyeOff size={18}/>

:

<Eye size={18}/>

}

</button>


</div>

</div>









<div className="space-y-2">

<Label>
Confirm Password
</Label>


<div className="relative">


<Input

name="confirmPassword"

type={showConfirmPassword ? "text" : "password"}

value={formData.confirmPassword}

onChange={handleChange}

autoComplete="new-password"

className="pr-10"

required

/>



<button

type="button"

onClick={() => setShowConfirmPassword(!showConfirmPassword)}

className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"

>

{

showConfirmPassword

?

<EyeOff size={18}/>

:

<Eye size={18}/>

}


</button>


</div>


</div>


</div>









<RoleSelector

value={role}

onChange={setRole}

/>









{
role === "STUDENT" &&


<div className="space-y-4 border rounded-xl p-5">


<h3 className="font-semibold">
Student Information
</h3>



<Input

name="college"

placeholder="College"

value={formData.college}

onChange={handleChange}

/>





<Input

name="degree"

placeholder="Degree"

value={formData.degree}

onChange={handleChange}

/>





<Input

name="careerGoal"

placeholder="Career Goal"

value={formData.careerGoal}

onChange={handleChange}

/>



</div>

}









{
role === "EMPLOYER" &&


<div className="space-y-4 border rounded-xl p-5">


<h3 className="font-semibold">
Company Information
</h3>




<Input

name="companyName"

placeholder="Company Name"

value={formData.companyName}

onChange={handleChange}

/>





<Input

name="industry"

placeholder="Industry"

value={formData.industry}

onChange={handleChange}

/>






<Input

name="website"

placeholder="https://company.com"

value={formData.website}

onChange={handleChange}

/>



</div>

}









{
registerMutation.isError &&


<div className="text-red-500 text-sm">


<p>

{
registerMutation.error?.response?.data?.message
||
"Registration failed"

}

</p>


</div>

}









<Button

type="submit"

className="w-full"

disabled={registerMutation.isPending}

>


{

registerMutation.isPending

?

"Creating Account..."

:

"Create Account"

}


</Button>









<p className="text-center text-sm">


Already have account?


<Link

to="/login"

className="text-blue-600 ml-1"

>

Login

</Link>


</p>





</form>

  );

}