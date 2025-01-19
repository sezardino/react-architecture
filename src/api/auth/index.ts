import { axiosInstance } from "@/libs/axios";
import { AuthDto, AuthResponse } from "./types";

export class AuthApiService {
  static login(dto: AuthDto) {
    return axiosInstance.post<AuthResponse>("/auth/login", dto);
  }

  static register(dto: AuthDto) {
    return axiosInstance.post<void>("/auth/registration", dto);
  }

  static refreshAccessToken(token: string) {
    return axiosInstance.post<AuthResponse>("/auth/refresh", { token });
  }
}
