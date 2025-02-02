Вот описание для папки `pages/`, где будут храниться страницы и бизнес-логика для этих страниц:

---

# **pages**

The `pages/` folder contains the actual **pages** of the application. Each page represents a route in the application, and it encapsulates both the **UI components** and the **business logic** necessary for that particular route. Pages are responsible for managing the logic specific to each route, handling data fetching, mutations, and passing down the necessary data to the relevant UI components.

### **Purpose**

- **Page-Level Business Logic**: Pages handle the logic specific to the route. This includes dealing with mutations, API calls, and routing logic.
- **UI Composition**: Pages combine UI components and business logic to present a complete view to the user.
- **Route-Specific Logic**: Each page might have different logic for interacting with APIs, handling user actions, and managing state.

### **Structure**

```
src/
├── pages/
│   ├── auth/
│   │   ├── login.tsx      # Login page (with business logic)
│   │   └── register.tsx   # Register page (with business logic)
│   ├── landing/
│   │   └── home.tsx       # Home page (with business logic)
│   ├── dashboard/
│   │   └── index.tsx      # Dashboard page (with business logic)
```

### **Key Features**

- **UI and Business Logic**: Pages are where the UI elements (e.g., forms, buttons) and the business logic (e.g., API calls, state management) come together.
- **Navigation**: Pages typically handle navigation between different parts of the application using `react-router` or other routing libraries.
- **Data Fetching and Mutations**: Pages are where data fetching (using hooks like `useQuery`, `useMutation`) happens, and responses are passed to the UI components.

### **Example: LoginPage**

Here’s an example of how a login page could be structured:

```tsx
import { LoginForm, LoginFormValues } from "@/components/forms/login";
import { Button } from "@/components/ui/button";
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
        navigate(ApplicationUrls.landing.home);
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

      <p className="text-center my-5">or</p>

      <ul>
        <li>
          <Button variant={"outline"} className="w-full" asChild>
            <a href="http://localhost:8001/auth/google/login">
              Login with Google
            </a>
          </Button>
        </li>
      </ul>

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
```

### **When to Use Pages**

- **Route Handling**: Use the `pages/` folder to define components that correspond to specific routes in your app.
- **Route-Specific Business Logic**: If a page requires data fetching, mutations, or other logic specific to that route, place it here.
- **UI Composition for Pages**: This is where you will combine various components (like forms, buttons, tables, etc.) to create full page layouts.

### **Conclusion**

The `pages/` folder contains the highest-level components that correspond to routes in your application. These components combine both UI and business logic to manage how each route behaves and interacts with data. Pages handle data fetching, navigation, and any other logic that’s specific to the page, making them the central place for the logic related to routes.

---

Теперь описание сосредоточено именно на страницах и бизнес-логике для этих страниц.
