import {
    useParams,
    useNavigate
} from "react-router-dom";


import {
    useEffect,
    useState
} from "react";


import {
    User,
    Mail,
    Phone,
    MapPin,
    GraduationCap,
    Upload,
    FileText
} from "lucide-react";


import toast from "react-hot-toast";


import {
    createApplication
} from "@/api/application.api";


import {
    useAuth
} from "@/context/AuthContext";


import useInternshipById
from "../hooks/useInternshipById";






export default function ApplyInternship(){


const {id}=useParams();


const navigate = useNavigate();



const {
    user,
    isAuthenticated
}=useAuth();



const {
    data,
    isLoading
}=useInternshipById(id);



const internship=data?.data;




const [loading,setLoading]=useState(false);




const [form,setForm]=useState({

    fullName:"",

    email:"",

    phone:"",

    location:"",

    college:"",

    degree:"",

    resume:null,

    coverLetter:"",

    whyHireMe:"",

    availability:"",

    expectedDuration:""

});







// ==========================
// AUTO FILL USER
// ==========================

useEffect(()=>{


if(user){


setForm(prev=>({

    ...prev,

    fullName:user.name || "",

    email:user.email || ""

}));


}


},[user]);









// ==========================
// AUTH CHECK
// ==========================

if(!isAuthenticated){


navigate(

"/login",

{

replace:true,

state:{
from:`/internships/${id}/apply`
}

}

);


return null;


}







// ==========================
// ROLE CHECK
// ==========================


if(user?.role !== "STUDENT"){


return (

<div className="
min-h-screen
flex
items-center
justify-center
">


<h1 className="
text-2xl
font-bold
">

Only students can apply for internships

</h1>


</div>


);


}







if(isLoading){


return (

<div className="
min-h-screen
flex
justify-center
items-center
">

Loading internship details...

</div>

);


}







if(!internship){


return (

<div className="
text-center
py-20
">

Internship not found

</div>

);


}









const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};









const submitHandler=async(e)=>{


e.preventDefault();





if(!form.resume){


toast.error(
"Please upload your resume"
);


return;


}






try{


setLoading(true);



const formData=new FormData();





formData.append(
"internshipId",
id
);



formData.append(
"fullName",
form.fullName
);


formData.append(
"email",
form.email
);


formData.append(
"phone",
form.phone
);


formData.append(
"location",
form.location
);


formData.append(
"college",
form.college
);


formData.append(
"degree",
form.degree
);


formData.append(
"coverLetter",
form.coverLetter
);


formData.append(
"whyHireMe",
form.whyHireMe
);


formData.append(
"availability",
form.availability
);


formData.append(
"expectedDuration",
form.expectedDuration
);





// file

formData.append(
"resume",
form.resume
);








await createApplication(formData);






toast.success(
"Application submitted successfully"
);





navigate(
"/student/dashboard"
);



}
catch(error){


console.log(error);


toast.error(

error?.response?.data?.message
||
"Application failed"

);


}
finally{


setLoading(false);


}


};









return (

<div className="
max-w-5xl
mx-auto
py-10
">


<div className="
bg-white
rounded-3xl
border
shadow-sm
p-10
">


<h1 className="
text-3xl
font-bold
">

Internship Application

</h1>



<p className="
text-gray-500
mt-2
mb-8
">

{internship.title}

</p>







<form

onSubmit={submitHandler}

className="
space-y-8
"

>





<Section title="Personal Information">


<div className="
grid
md:grid-cols-2
gap-5
">



<Input

name="fullName"

value={form.fullName}

placeholder="Full Name"

icon={<User/>}

onChange={handleChange}

/>




<Input

name="email"

value={form.email}

placeholder="Email Address"

icon={<Mail/>}

onChange={handleChange}

/>





<Input

name="phone"

value={form.phone}

placeholder="Phone Number"

icon={<Phone/>}

onChange={handleChange}

/>




<Input

name="location"

value={form.location}

placeholder="Current Location"

icon={<MapPin/>}

onChange={handleChange}

/>



</div>


</Section>









<Section title="Academic Information">


<div className="
grid
md:grid-cols-2
gap-5
">


<Input

name="college"

value={form.college}

placeholder="College / University"

icon={<GraduationCap/>}

onChange={handleChange}

/>





<Input

name="degree"

value={form.degree}

placeholder="Degree Program"

onChange={handleChange}

/>


</div>


</Section>









<Section title="Resume Upload">


<label className="
border-2
border-dashed
rounded-xl
p-8
flex
flex-col
items-center
cursor-pointer
">


<Upload size={35}/>


<p className="
mt-3
font-medium
">

Upload Resume PDF

</p>




<input

type="file"

accept=".pdf"

hidden

onChange={(e)=>{


setForm({

...form,

resume:e.target.files[0]

});


}}


/>


</label>





{

form.resume &&


<p className="
mt-3
text-green-600
flex
items-center
gap-2
">


<FileText size={18}/>


{form.resume.name}


</p>


}



</Section>









<Section title="Cover Letter">


<textarea

name="coverLetter"

value={form.coverLetter}

rows="5"

placeholder="Explain why you are interested in this internship"

className="
w-full
border
rounded-xl
p-4
"

onChange={handleChange}

/>


</Section>









<Section title="Additional Information">


<textarea

name="whyHireMe"

value={form.whyHireMe}

rows="5"

placeholder="Why should we select you?"

className="
w-full
border
rounded-xl
p-4
mb-5
"

onChange={handleChange}

/>





<Input

name="availability"

value={form.availability}

placeholder="Availability"

onChange={handleChange}

/>






<Input

name="expectedDuration"

value={form.expectedDuration}

placeholder="Expected Internship Duration"

onChange={handleChange}

/>



</Section>









<button

disabled={loading}

className="
bg-blue-600
hover:bg-blue-700
disabled:bg-gray-400
text-white
px-10
py-3
rounded-xl
font-semibold
"

>


{

loading

?

"Submitting..."

:

"Submit Application"

}


</button>







</form>



</div>


</div>


);


}









function Input({

name,

placeholder,

icon,

value,

onChange

}){


return (

<div className="
relative
">


{

icon &&

<div className="
absolute
left-3
top-3
text-gray-400
">

{icon}

</div>

}




<input

name={name}

value={value || ""}

placeholder={placeholder}

onChange={onChange}

className="
w-full
border
rounded-xl
py-3
pl-11
pr-4
"

/>


</div>


);


}









function Section({

title,

children

}){


return (

<div>


<h2 className="
text-xl
font-bold
mb-4
">

{title}

</h2>



<div className="
bg-gray-50
rounded-2xl
p-6
">

{children}

</div>


</div>


);


}