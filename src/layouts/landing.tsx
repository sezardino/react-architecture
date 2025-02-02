import { useCurrentUserQuery } from "@/hooks/queries/app/current-user";
import { useForceLogout } from "@/hooks/use-force-logout";
import { PropsWithChildren } from "react";
import { Navbar } from "../modules/layouts/navbar";

export const LandingLayout = ({ children }: PropsWithChildren) => {
  const { data: currentUser } = useCurrentUserQuery();
  const logout = useForceLogout();
  console.log(currentUser);
  return (
    <>
      <Navbar isUserAuthenticated={!!currentUser} onLogoutClick={logout} />
      {JSON.stringify({ currentUser, bool: !!currentUser })}
      {children}
    </>
  );
};
