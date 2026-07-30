import api from "./axios";


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