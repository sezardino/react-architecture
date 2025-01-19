import { PropsWithChildren } from "react";
import { Navbar } from "../modules/layouts/navbar";

export const LandingLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar isUserAuthenticated={false} />
      {children}
    </>
  );
};
