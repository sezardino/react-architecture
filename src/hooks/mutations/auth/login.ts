import { AuthApiService } from "@/api/auth";
import { AuthDto } from "@/api/auth/types";
import {
  ACCESS_TOKEN_COOKIE_NAME,
  REFRESH_TOKEN_COOKIE_NAME,
} from "@/const/cookies";
import { CURRENT_USER_QUERY_KEY } from "@/hooks/queries/app/current-user";
import { CookieService } from "@/libs/universal-cookies";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLoginMutation = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (dto: AuthDto) => AuthApiService.login(dto),
    onSuccess: (res) => {
      const { accessToken, refreshToken } = res.data;

      CookieService.set(ACCESS_TOKEN_COOKIE_NAME, accessToken);
      CookieService.set(REFRESH_TOKEN_COOKIE_NAME, refreshToken);

      client.invalidateQueries({ queryKey: [CURRENT_USER_QUERY_KEY] });
    },
  });
};
