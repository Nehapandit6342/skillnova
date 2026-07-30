import api from "./axios";



// ===============================
// CREATE INTERNSHIP
// ===============================

export const createInternship = async (data)=>{


    const response = await api.post(
        "/internships",
        data
    );


    return response.data;

};





// ===============================
// GET MY INTERNSHIPS
// ===============================

export const getMyInternships = async()=>{


    const response = await api.get(
        "/internships/my"
    );


    return response.data;

};






// ===============================
// GET ALL INTERNSHIPS
// ===============================

export const getInternships = async()=>{


    const response = await api.get(
        "/internships"
    );


    return response.data;

};






// ===============================
// GET SINGLE INTERNSHIP
// ===============================

export const getInternshipById = async(id)=>{


    const response = await api.get(

        `/internships/${id}`

    );


    return response.data;

};







// ===============================
// UPDATE INTERNSHIP
// ===============================

export const updateInternship = async({
    id,
    data
})=>{


    const response = await api.put(

        `/internships/${id}`,

        data

    );


    return response.data;

};







// ===============================
// DELETE INTERNSHIP
// ===============================

export const deleteInternship = async(id)=>{


    const response = await api.delete(

        `/internships/${id}`

    );


    return response.data;

};