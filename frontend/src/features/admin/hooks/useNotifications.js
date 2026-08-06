import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";


const useNotifications = () => {

  const queryClient = useQueryClient();


  const query = useQuery({

    queryKey: ["notifications"],

    queryFn: async () => {

      const response = await api.get("/notifications");

      return response.data.data;

    },

  });



  const markAsRead = useMutation({

    mutationFn: async (id) => {

      await api.patch(`/notifications/${id}/read`);

    },


    onSuccess: () => {

      queryClient.invalidateQueries({
        queryKey: ["notifications"],
      });

    },

  });



  return {

    ...query,

    markAsRead,

  };

};


export default useNotifications;