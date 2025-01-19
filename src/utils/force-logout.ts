import {
  ACCESS_TOKEN_COOKIE_NAME,
  REFRESH_TOKEN_COOKIE_NAME,
} from "@/const/cookies";
import { CookieService } from "@/libs/universal-cookies";

export const forceLogout = (reload = true) => {
  CookieService.delete(ACCESS_TOKEN_COOKIE_NAME);
  CookieService.delete(REFRESH_TOKEN_COOKIE_NAME);

  if (reload) window.location.reload();
};
