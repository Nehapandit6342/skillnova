import api from "./axios";




// ===============================
// GET EMPLOYER CANDIDATES
// ===============================

export const getCandidates = async () => {


    const response = await api.get(

        "/candidates"

    );


    return response.data;


};








// ===============================
// GET SINGLE CANDIDATE DETAILS
// ===============================

export const getCandidateDetails = async (id) => {


    const response = await api.get(

        `/candidates/${id}`

    );


    return response.data;


};