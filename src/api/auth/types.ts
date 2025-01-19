export type AuthDto = {
  login: string;
  password: string;
};

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
};
