function RecentStudents() {

  const students = [
    {
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      status: "Active",
    },
    {
      name: "Priya Singh",
      email: "priya@gmail.com",
      status: "Pending",
    },
    {
      name: "Amit Kumar",
      email: "amit@gmail.com",
      status: "Active",
    },
    {
      name: "Sneha Yadav",
      email: "sneha@gmail.com",
      status: "Pending",
    },
  ];


  return (
    <div
      style={{
        background: "#fff",
        marginTop: "40px",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >

      <h2>
        Recent Students
      </h2>


      <table
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse: "collapse",
        }}
      >

        <thead>

          <tr>

            <th
              style={{
                textAlign:"left",
                padding:"12px"
              }}
            >
              Name
            </th>

            <th
              style={{
                textAlign:"left",
                padding:"12px"
              }}
            >
              Email
            </th>

            <th
              style={{
                textAlign:"left",
                padding:"12px"
              }}
            >
              Status
            </th>

          </tr>

        </thead>


        <tbody>

          {
            students.map((student, index)=>(
              
              <tr key={index}>

                <td style={{padding:"12px"}}>
                  {student.name}
                </td>

                <td style={{padding:"12px"}}>
                  {student.email}
                </td>

                <td style={{padding:"12px"}}>
                  {student.status}
                </td>

              </tr>

            ))
          }


        </tbody>


      </table>


    </div>
  );
}


export default RecentStudents;