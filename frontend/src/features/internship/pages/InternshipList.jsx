import {
    useState
} from "react";


import {
    Search,
    MapPin,
    Clock,
    Briefcase,
    Banknote,
    Building2
} from "lucide-react";


import {
    useNavigate
}
from "react-router-dom";


import useInternships
from "../hooks/useInternships";





export default function InternshipList(){


    const navigate = useNavigate();



    const {
        data,
        isLoading
    } = useInternships();




    const internships =
    data?.data || [];




    const [search,setSearch]=useState("");

    const [location,setLocation]=useState("");

    const [type,setType]=useState("");







    const filteredInternships =
    internships.filter((internship)=>{


        const searchText =
        search.toLowerCase();



        const title =
        internship.title
        ?.toLowerCase() || "";



        const company =
        internship.employer
        ?.companyName
        ?.toLowerCase() || "";



        const skills =
        internship.skills
        ?.join(" ")
        ?.toLowerCase() || "";



        return (

            title.includes(searchText)
            ||
            company.includes(searchText)
            ||
            skills.includes(searchText)

        )

        &&

        (
            location
            ?
            internship.location
            ===
            location
            :
            true
        )


        &&


        (
            type
            ?
            internship.type
            ===
            type
            :
            true
        )



    });







    if(isLoading){

        return (

            <div className="
            flex
            justify-center
            p-10
            ">

                Loading internships...

            </div>

        );

    }








return (


<div

className="
max-w-7xl
mx-auto
px-6
py-10
space-y-8
"

>





{/* HEADER */}


<div>


<h1

className="
text-4xl
font-bold
text-gray-900
"

>

Available Internships

</h1>



<p

className="
text-gray-500
mt-2
"

>

Find the best internship opportunities
and start your career journey.

</p>


</div>







{/* FILTER BAR */}


<div

className="
bg-white
border
rounded-2xl
p-5
shadow-sm
grid
md:grid-cols-3
gap-4
"

>





<div

className="
relative
"

>


<Search

className="
absolute
left-3
top-3
text-gray-400
"

/>



<input


value={search}


onChange={(e)=>
setSearch(e.target.value)
}


placeholder="
Search internship, company, skill...
"


className="
w-full
border
rounded-xl
py-3
pl-10
pr-4
outline-none
focus:ring-2
focus:ring-blue-500
"


/>



</div>







<select

value={location}

onChange={(e)=>
setLocation(e.target.value)
}


className="
border
rounded-xl
px-4
py-3
"

>


<option value="">

All Locations

</option>


<option>

Kathmandu

</option>


<option>

Remote

</option>


</select>









<select

value={type}

onChange={(e)=>
setType(e.target.value)
}


className="
border
rounded-xl
px-4
py-3
"

>


<option value="">

All Types

</option>


<option>

Full Time

</option>


<option>

Part Time

</option>



</select>





</div>









{/* CARDS */}



{

filteredInternships.length===0

?


<div

className="
text-center
py-20
text-gray-500
"

>

No internship found.

</div>


:


<div

className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-6
"

>


{

filteredInternships.map((internship)=>(


<div

key={internship.id}

className="
bg-white
border
rounded-2xl
p-6
shadow-sm
hover:shadow-xl
transition
hover:-translate-y-1
"

>




<div

className="
flex
items-center
gap-4
"

>


<div

className="
w-12
h-12
rounded-xl
bg-blue-100
flex
items-center
justify-center
text-blue-600
"

>

<Building2/>

</div>




<div>


<h2

className="
font-bold
text-lg
"

>

{internship.title}

</h2>



<p

className="
text-gray-500
text-sm
"

>

{
internship.employer?.companyName
||
internship.employer?.user?.name
||
"Company"
}

</p>



</div>



</div>







<div

className="
mt-5
space-y-3
text-gray-600
text-sm
"

>


<Info

icon={<MapPin size={18}/>}

text={
internship.location
}

/>


<Info

icon={<Briefcase size={18}/>}

text={
internship.type
}

/>


<Info

icon={<Clock size={18}/>}

text={
internship.duration
}

/>


<Info

icon={<Banknote size={18}/>}

text={
`NPR ${internship.stipend}`
}

/>


</div>









{/* SKILLS */}


<div

className="
flex
flex-wrap
gap-2
mt-5
"

>


{
internship.skills?.slice(0,3)
.map((skill,index)=>(


<span

key={index}

className="
bg-blue-50
text-blue-700
px-3
py-1
rounded-full
text-xs
"

>

{skill}

</span>


))
}



</div>









<button


onClick={()=>navigate(
`/internships/${internship.id}`
)}


className="
mt-6
w-full
bg-blue-600
text-white
py-3
rounded-xl
font-semibold
hover:bg-blue-700
"

>

View Details

</button>








</div>


))


}


</div>


}



</div>


);


}









function Info({

icon,

text

}){


return (

<div

className="
flex
items-center
gap-3
"

>

{icon}


<span>

{text || "Not specified"}

</span>


</div>


);


}