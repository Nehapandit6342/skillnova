import { useParams } from "react-router-dom";


export default function InternshipDetails(){

const {id}=useParams();


return(

<div>

<h1>Internship Details</h1>

<p>
Internship ID : {id}
</p>


<div>

<h3>Frontend Developer Intern</h3>

<p>
Company : SkillNova Pvt Ltd
</p>

<p>
Duration : 3 Months
</p>

<p>
Status : Active
</p>


</div>


</div>

)

}