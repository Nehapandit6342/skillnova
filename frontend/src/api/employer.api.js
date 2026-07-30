import api from "./axios";



// ================= GET EMPLOYER PROFILE =================

export const getEmployerProfile = async () => {


    const response = await api.get(
        "/employer/profile"
    );


    return response.data;

};





// ================= UPDATE EMPLOYER PROFILE =================

export const updateEmployerProfile = async (data) => {


    const response = await api.put(

        "/employer/profile",

        data

    );


    return response.data;

};
export const getEmployerDashboardStats = async()=>{


const response =
await api.get(
"/employer/dashboard"
);


return response.data;


};