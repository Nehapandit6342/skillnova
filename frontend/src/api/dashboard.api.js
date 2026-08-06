import api from "./axios";




// =================================
// EMPLOYER DASHBOARD STATS
// =================================

export const getEmployerDashboardStats =
async()=>{


    const response =
    await api.get(

        "/employer/dashboard/stats"

    );


    return response.data;


};







// =================================
// APPLICATION TREND
// =================================

export const getApplicationTrend =
async()=>{


    const response =
    await api.get(

        "/employer/dashboard/application-trend"

    );


    return response.data;


};








// =================================
// APPLICATION STATUS
// =================================

export const getApplicationStatus =
async()=>{


    const response =
    await api.get(

        "/employer/dashboard/application-status"

    );


    return response.data;


};