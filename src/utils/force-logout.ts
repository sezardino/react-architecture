import { clearTokens } from "./tokens";

export const forceLogout = (reload = true) => {
  clearTokens();

  if (reload) window.location.reload();
};
