import { axiosInstance } from "@/libs/axios";
import { CurrentUserResponse } from "./types";

export class AppApiService {
  static currentUser() {
    return axiosInstance.get<CurrentUserResponse>("/users/me");
  }
}
