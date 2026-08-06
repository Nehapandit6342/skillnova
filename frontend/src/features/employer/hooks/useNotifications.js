import {
    useQuery
}
from "@tanstack/react-query";


import {
    getNotifications
}
from "../../../api/notification.api";



const useNotifications = () => {


    return useQuery({

        queryKey: [
            "employer-notifications"
        ],


        queryFn: getNotifications,


        refetchInterval: 10000,

    });


};


export default useNotifications;