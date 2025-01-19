import { axiosInstance } from "@/libs/axios";
import { AuthDto, LoginResponse, RefreshTokenResponse } from "./types";

export class AuthApiService {
  static login(dto: AuthDto) {
    return axiosInstance.post<LoginResponse>("/auth/login", dto);
  }

  static register(dto: AuthDto) {
    return axiosInstance.post<void>("/auth/registration", dto);
  }

  static refreshAccessToken(token: string) {
    return axiosInstance.post<RefreshTokenResponse>("/auth/refresh", { token });
  }
}
