import { AuthApiService } from "@/api/auth";
import { AuthDto } from "@/api/auth/types";
import { CURRENT_USER_QUERY_KEY } from "@/hooks/queries/app/current-user";
import { setTokens } from "@/utils/tokens";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLoginMutation = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (dto: AuthDto) => AuthApiService.login(dto),
    onSuccess: (res) => {
      const { accessToken, refreshToken } = res.data;

      setTokens(accessToken, refreshToken);

      client.invalidateQueries({ queryKey: [CURRENT_USER_QUERY_KEY] });
    },
  });
};
