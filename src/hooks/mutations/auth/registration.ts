import { AuthApiService } from "@/api/auth";
import { AuthDto } from "@/api/auth/types";
import {
  ACCESS_TOKEN_COOKIE_NAME,
  REFRESH_TOKEN_COOKIE_NAME,
} from "@/const/cookies";
import { CookieService } from "@/libs/universal-cookies";
import { useMutation } from "@tanstack/react-query";

export const useRegistrationMutation = () =>
  useMutation({
    mutationFn: (dto: AuthDto) => AuthApiService.register(dto),
    onSuccess: (res) => {
      const { accessToken, refreshToken } = res.data;

      CookieService.set(ACCESS_TOKEN_COOKIE_NAME, accessToken);
      CookieService.set(REFRESH_TOKEN_COOKIE_NAME, refreshToken);
    },
  });
