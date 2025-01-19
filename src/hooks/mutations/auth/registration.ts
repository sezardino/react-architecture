import { AuthApiService } from "@/api/auth";
import { AuthDto } from "@/api/auth/types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useRegistrationMutation = () =>
  useMutation({
    mutationFn: (dto: AuthDto) => AuthApiService.register(dto),
    onSuccess: () => {
      toast.success("Successfully registered, please login now");
    },
  });
