import { useMutation } from "@tanstack/react-query";

import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "User created Successfully, Please confirm your email address"
      );
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message);
    },
  });

  return { signup, isLoading };
}
