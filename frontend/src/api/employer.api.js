import axiosInstance from "./axios";


// GET EMPLOYER PROFILE

export const getEmployerProfile = async()=>{

    const response = await axiosInstance.get(
        "/employer/profile"
    );

    return response.data;

};




// UPDATE EMPLOYER PROFILE

export const updateEmployerProfile = async(data)=>{

    const response = await axiosInstance.put(
        "/employer/profile",
        data
    );

    return response.data;

};