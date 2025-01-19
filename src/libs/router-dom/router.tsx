import { AuthLayout } from "@/components/layouts/auth";
import { LandingLayout } from "@/components/layouts/landing";
import LoginPage from "@/pages/auth/login";
import RegistrationPage from "@/pages/auth/registration";
import AboutPage from "@/pages/landing/about";
import HomePage from "@/pages/landing/home";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { ApplicationUrls } from "./const";
import AdminPage from "@/pages/landing/admin";
import ContactPage from "@/pages/landing/contact";
import CustomerPage from "@/pages/landing/customer";
import ProtectedPage from "@/pages/landing/protected";
import TermsPage from "@/pages/landing/terms";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: ApplicationUrls.landing.home,
        Component: () => (
          <LandingLayout>
            <Outlet />
          </LandingLayout>
        ),
        children: [
          {
            path: ApplicationUrls.landing.home,
            index: true,
            Component: HomePage,
          },
          {
            path: ApplicationUrls.landing.about,
            Component: AboutPage,
          },
          {
            path: ApplicationUrls.landing.admin,
            Component: AdminPage,
          },
          {
            path: ApplicationUrls.landing.contact,
            Component: ContactPage,
          },
          {
            path: ApplicationUrls.landing.customer,
            Component: CustomerPage,
          },
          {
            path: ApplicationUrls.landing.protected,
            Component: ProtectedPage,
          },
          {
            path: ApplicationUrls.landing.terms,
            Component: TermsPage,
          },
        ],
      },
      {
        path: ApplicationUrls.auth.index,
        Component: () => (
          <AuthLayout>
            <Outlet />
          </AuthLayout>
        ),
        children: [
          {
            path: ApplicationUrls.auth.login,
            index: true,
            Component: LoginPage,
          },
          { path: ApplicationUrls.auth.register, Component: RegistrationPage },
        ],
      },
    ],
  },
]);
