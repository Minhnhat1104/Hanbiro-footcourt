import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../utils/axiosInstance";

export const useAuthMutation = () => {
  const mLogin = useMutation({
    mutationFn: async (data: { username: string; password: string }) => {
      const response = await axiosInstance.post("/auth/login", data);
      return response.data;
    },
  });

  return { mLogin };
};
