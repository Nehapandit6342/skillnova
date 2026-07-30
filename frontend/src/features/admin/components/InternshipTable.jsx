export default function InternshipTable({internships}){


return (

<div className="bg-white rounded-lg shadow p-5">


<table className="w-full">


<thead>

<tr className="border-b">

<th className="p-3 text-left">
Title
</th>

<th className="p-3 text-left">
Company
</th>

<th className="p-3 text-left">
Location
</th>

<th className="p-3 text-left">
Stipend
</th>

</tr>

</thead>


<tbody>


{
internships.map((item)=>(

<tr key={item.id} className="border-b">


<td className="p-3">
{item.title}
</td>


<td className="p-3">
{item.employer?.companyName}
</td>


<td className="p-3">
{item.location}
</td>


<td className="p-3">
{item.stipend}
</td>


</tr>


))

}


</tbody>


</table>


{
internships.length === 0 && (

<p className="text-center mt-5">
No internships found
</p>

)

}


</div>

);

}