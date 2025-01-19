import {
  GOOGLE_OAUTH_ACCESS_TOKEN_PARAM,
  GOOGLE_OAUTH_REFRESH_TOKEN_PARAM,
} from "@/const/search-params";
import { ApplicationUrls } from "@/libs/router-dom";
import { setTokens } from "@/utils/tokens";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const AuthPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const client = useQueryClient();

  useEffect(() => {
    const accessToken = searchParams.get(GOOGLE_OAUTH_ACCESS_TOKEN_PARAM);
    const refreshToken = searchParams.get(GOOGLE_OAUTH_REFRESH_TOKEN_PARAM);

    if (!accessToken || !refreshToken)
      return navigate(ApplicationUrls.landing.home);

    setTokens(accessToken, refreshToken);
    client.clear();
    const newParams = new URLSearchParams();
    newParams.set(GOOGLE_OAUTH_ACCESS_TOKEN_PARAM, "");
    newParams.set(GOOGLE_OAUTH_REFRESH_TOKEN_PARAM, "");
    setSearchParams(newParams);
    navigate(ApplicationUrls.landing.home, { replace: true });
  }, []);

  return null;
};

export default AuthPage;
