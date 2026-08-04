import {
    useParams,
    useLocation,
    useNavigate
} from "react-router-dom";


import {
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





export default function ApplyInternship(){


const {
    id
}=useParams();



const location =
useLocation();



const navigate =
useNavigate();




const internship =
location.state?.internship;





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
duration:""

});







const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:

e.target.value

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



const data =
new FormData();



data.append(
"internshipId",
id
);




Object.entries(form)
.forEach(
([key,value])=>{

data.append(
key,
value
);

}
);





await createApplication(data);





toast.success(
"Application submitted successfully"
);





navigate(
"/student/applications"
);



}
catch(error){


toast.error(

error.response?.data?.message
||
"Application failed"

);


}
finally{


setLoading(false);


}


};









return (


<div
className="
max-w-5xl
mx-auto
py-10
"
>



<div

className="
bg-white
rounded-3xl
border
shadow-sm
p-10
"

>



<h1

className="
text-3xl
font-bold
text-gray-800
"

>

Internship Application

</h1>



<p
className="
text-gray-500
mt-2
mb-8
"
>

{
internship?.title
||
"Complete your application"
}

</p>









<form

onSubmit={submitHandler}

className="
space-y-8
"

>







{/* PERSONAL INFORMATION */}



<Section

title="Personal Information"

>



<div
className="
grid
md:grid-cols-2
gap-5
"
>


<Input

name="fullName"

placeholder="Full Name"

icon={<User/>}

onChange={handleChange}

/>



<Input

name="email"

placeholder="Email Address"

icon={<Mail/>}

onChange={handleChange}

/>




<Input

name="phone"

placeholder="Phone Number"

icon={<Phone/>}

onChange={handleChange}

/>




<Input

name="location"

placeholder="Current Location"

icon={<MapPin/>}

onChange={handleChange}

/>


</div>


</Section>









{/* EDUCATION */}


<Section

title="Academic Information"

>


<div
className="
grid
md:grid-cols-2
gap-5
"
>



<Input

name="college"

placeholder="College / University"

icon={<GraduationCap/>}

onChange={handleChange}

/>




<Input

name="degree"

placeholder="Degree Program"

onChange={handleChange}

/>



</div>



</Section>









{/* RESUME */}


<Section

title="Resume Upload"

>


<label
className="
border-2
border-dashed
rounded-xl
p-8
flex
flex-col
items-center
cursor-pointer
hover:bg-gray-50
"
>


<Upload
size={35}
/>


<p
className="
mt-3
font-medium
"
>

Upload Resume PDF

</p>



<input

type="file"

accept=".pdf"

hidden

onChange={(e)=>


setForm({

...form,

resume:e.target.files[0]

})


}


/>


</label>




{
form.resume &&

<p
className="
mt-3
text-green-600
flex
gap-2
items-center
"
>

<FileText size={18}/>

{
form.resume.name
}


</p>

}



</Section>









{/* COVER LETTER */}



<Section

title="Cover Letter"

>


<textarea

name="coverLetter"

rows="6"

placeholder="
Explain why you are interested in this internship...
"

className="
w-full
border
rounded-xl
p-4
"

onChange={handleChange}

/>



</Section>









{/* ADDITIONAL */}



<Section

title="Additional Information"

>



<textarea

name="whyHireMe"

rows="5"

placeholder="
Why should we select you?
"

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

placeholder="Availability (Example: Immediately)"

onChange={handleChange}

/>



<div className="mt-5">


<Input

name="duration"

placeholder="Expected Internship Duration"

onChange={handleChange}

/>


</div>




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
onChange

}){


return (

<div
className="
relative
"
>


{
icon &&
<div
className="
absolute
left-3
top-3
text-gray-400
"
>
{icon}
</div>
}


<input

name={name}

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

<h2

className="
text-xl
font-bold
mb-4
"

>

{title}

</h2>


<div
className="
bg-gray-50
rounded-2xl
p-6
"
>

{children}


</div>


</div>


);


}