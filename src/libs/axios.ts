import { AuthApiService } from "@/api/auth";
import {
  ACCESS_TOKEN_COOKIE_NAME,
  REFRESH_TOKEN_COOKIE_NAME,
} from "@/const/cookies";
import { forceLogout } from "@/utils/force-logout";
import { setTokens } from "@/utils/tokens";
import axios from "axios";
import { CookieService } from "./universal-cookies";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_BACKEND_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = CookieService.get(ACCESS_TOKEN_COOKIE_NAME);
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      const token = CookieService.get(REFRESH_TOKEN_COOKIE_NAME);

      if (!token) return Promise.reject(error);

      originalRequest._retry = true;
      try {
        const refreshResponse = await AuthApiService.refreshAccessToken(token);

        const { accessToken, refreshToken } = refreshResponse.data;

        setTokens(accessToken, refreshToken);

        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;

        return axiosInstance(originalRequest);
      } catch (error) {
        forceLogout();
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
