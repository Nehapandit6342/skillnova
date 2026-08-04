import {
    useQuery
} from "@tanstack/react-query";


import {
    Calendar,
    Building2,
    MapPin,
    Clock,
    CheckCircle,
    XCircle,
    Clock3
} from "lucide-react";


import api from "@/api/axios";





export default function MyApplications(){



const {
    data,
    isLoading
}=useQuery({


queryKey:[
    "my-applications"
],



queryFn:async()=>{


const response =
await api.get(
"/applications/my"
);



return response.data;



}



});








if(isLoading){


return (

<div

className="
min-h-screen
flex
items-center
justify-center
text-gray-500
"

>

Loading applications...

</div>

);


}







const applications =
data?.data || [];







return (


<div

className="
max-w-6xl
mx-auto
py-10
"

>


<h1

className="
text-3xl
font-bold
text-gray-800
mb-2
"

>

My Applications

</h1>




<p

className="
text-gray-500
mb-8
"

>

Track your internship application progress

</p>







{

applications.length === 0 &&


<div

className="
bg-white
border
rounded-2xl
p-10
text-center
"

>


<h2

className="
text-xl
font-semibold
"

>

No applications yet

</h2>


<p

className="
text-gray-500
mt-2
"

>

Start applying for internships to see them here.

</p>


</div>


}









<div

className="
grid
md:grid-cols-2
gap-6
"

>


{

applications.map((application)=>(


<ApplicationCard

key={application.id}

application={application}

/>


))


}



</div>





</div>


);


}









function ApplicationCard({

application

}){



const internship =
application.internship;






return (


<div

className="
bg-white
border
rounded-2xl
shadow-sm
p-6
hover:shadow-md
transition
"

>



<div

className="
flex
justify-between
items-start
"

>


<div>


<h2

className="
text-xl
font-bold
text-gray-800
"

>

{
internship?.title
}

</h2>




<p

className="
text-gray-500
mt-1
"

>

{
internship?.employer?.companyName
||
"Company"
}

</p>



</div>





<StatusBadge

status={
application.status
}

/>


</div>








<div

className="
mt-5
space-y-3
text-gray-600
"

>


<Info

icon={<Building2 size={18}/>}

text={
internship?.employer?.companyName
||
"Company"
}

/>





<Info

icon={<MapPin size={18}/>}

text={
internship?.location ||
"Remote"
}

/>






<Info

icon={<Clock size={18}/>}

text={
internship?.duration
}

/>






<Info

icon={<Calendar size={18}/>}

text={

new Date(
application.createdAt
)
.toLocaleDateString()

}

/>




</div>





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

{text}

</span>


</div>


);


}









function StatusBadge({

status

}){


const config={


PENDING:{


color:
"bg-yellow-100 text-yellow-700",


icon:
<Clock3 size={16}/>


},


ACCEPTED:{


color:
"bg-green-100 text-green-700",


icon:
<CheckCircle size={16}/>


},


REJECTED:{


color:
"bg-red-100 text-red-700",


icon:
<XCircle size={16}/>


}


};





const current =
config[status]
||
config.PENDING;





return (


<div

className={`
flex
items-center
gap-2
px-3
py-1
rounded-full
text-sm
font-semibold
${current.color}
`}

>


{current.icon}


{status}



</div>


);


}