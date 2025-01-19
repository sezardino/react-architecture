import { useCurrentUserQuery } from "@/hooks/queries/app/current-user";
import { PropsWithChildren } from "react";
import { Navbar } from "../modules/layouts/navbar";

export const LandingLayout = ({ children }: PropsWithChildren) => {
  const { data: currentUser } = useCurrentUserQuery();

  return (
    <>
      <Navbar isUserAuthenticated={!!currentUser?.data} />
      {children}
    </>
  );
};
