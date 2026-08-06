import axios from "./axios";


export const getNotifications = async()=>{

    const response = await axios.get(
        "/notifications"
    );

    return response.data;

};