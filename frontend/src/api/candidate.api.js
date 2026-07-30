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