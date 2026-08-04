import api from "./axios";




// =================================
// CREATE APPLICATION (STUDENT)
// =================================



export const createApplication = async(data)=>{


const response = await api.post(

"/applications",

data,

{

headers:{

"Content-Type":
"multipart/form-data"

}

}

);



return response.data;


};






// =================================
// GET STUDENT APPLICATIONS
// =================================

export const getMyApplications = async()=>{


    const response =
    await api.get(

        "/applications/my"

    );


    return response.data;


};






// =================================
// GET EMPLOYER APPLICATIONS
// =================================

export const getEmployerApplications = async()=>{


    const response =
    await api.get(

        "/applications/employer"

    );


    return response.data;


};






// =================================
// UPDATE APPLICATION STATUS
// =================================

export const updateApplicationStatus = async({

    id,

    status

})=>{


    const response =
    await api.patch(


        `/applications/${id}/status`,


        {
            status
        }


    );


    return response.data;


};