export type AuthDto = {
  login: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  login: string;
  userId: string;
};

export type RefreshTokenResponse = {
  accessToken: string;
  refreshToken: string;
};
