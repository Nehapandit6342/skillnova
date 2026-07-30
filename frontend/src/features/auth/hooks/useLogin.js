import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { loginUser } from "@/api/auth.api";
import { useAuth } from "@/context/AuthContext";

export default function useLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();

  return useMutation({
    mutationFn: loginUser,

    onSuccess: (response) => {
      console.log("LOGIN SUCCESS:", response);

      // Backend returns:
      // {
      //   success: true,
      //   data: {
      //      user: {...},
      //      token: "..."
      //   }
      // }

      const user = response?.data?.user;
      const token = response?.data?.token;

      if (!user || !token) {
        toast.error("Invalid login response");
        return;
      }

      // Save user and token
      login(user, token);

      toast.success("Login successful");

      console.log("Logged In User:", user);

      // Redirect according to role
      switch (user.role) {
        case "ADMIN":
          navigate("/admin/dashboard", { replace: true });
          break;

        case "STUDENT":
          navigate("/student/dashboard", { replace: true });
          break;

        case "EMPLOYER":
          navigate("/employer/dashboard", { replace: true });
          break;

        default:
          navigate("/", { replace: true });
      }
    },

    onError: (error) => {
      console.log(error);

      toast.error(
        error?.response?.data?.message || "Login failed"
      );
    },
  });
}