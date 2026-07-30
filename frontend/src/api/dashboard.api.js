import api from "./axios";


export const getEmployerDashboardStats = async()=>{


    const response =
    await api.get(
        "/employer/dashboard/stats"
    );


    return response.data;


};