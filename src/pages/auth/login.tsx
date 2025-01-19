import { LoginForm, LoginFormValues } from "@/components/forms/login";
import { useLoginMutation } from "@/hooks/mutations/auth/login";
import { ApplicationUrls } from "@/libs/router-dom";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const { mutateAsync: login } = useLoginMutation();

  const loginHandler = useCallback(
    async (values: LoginFormValues) => {
      try {
        await login(values);
        navigate(ApplicationUrls.home);
      } catch (e) {
        console.error(e);
      }
    },
    [login, navigate]
  );

  return (
    <main>
      <header className="mb-6 flex flex-col items-center">
        <h1 className="mb-2 text-2xl font-bold">Log in with your login</h1>
        <p className="text-muted-foreground">Enter your information to login</p>
      </header>

      <LoginForm onSubmit={loginHandler} />
      {/* TODO: add login by Google */}

      <footer className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
        <p>Don't have an account?</p>
        <Link
          to={ApplicationUrls.auth.register}
          className="font-medium text-primary"
        >
          Register
        </Link>
      </footer>
    </main>
  );
};

export default LoginPage;
