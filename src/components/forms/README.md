# **Forms**

The `forms/` folder contains components related to form handling in the application. This includes the JSX for rendering the form, as well as its validation schema. We use libraries like **Formik** or **React Hook Form** to manage form state, validation, and submission. This folder is dedicated to separating form-related logic from other components, keeping the forms modular and easy to maintain.

## **Structure**

```

forms/
├── component/
    ├── component.form.tsx      # Form JSX and logic
    ├── component.schema.ts     # Validation schema and types
```

### **Purpose**

Forms often have complex configurations that require separate validation logic, state management, and rendering. By separating the validation schema and form JSX, we keep the form code modular, easier to read, and maintain.

Each form is typically made up of:

- **Form Component** – The JSX structure and form management logic.
- **Schema** – The validation schema and its types (e.g., using `zod` or `yup`).

We manage forms using popular libraries like **Formik** or **React Hook Form**, which help with handling form state, validation, and submission.

## **Example**

### **Form Component (login.form.tsx)**

In the `login.form.tsx`, we define the form's layout and use a form library (like **React Hook Form**) for form management. Here's an example of a login form:

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema, LoginFormValues } from "./login.schema";
import { ComponentPropsWithoutRef } from "react";

type OmittedProps = Omit<ComponentPropsWithoutRef<"form">, "onSubmit">;
export type LoginFormProps = OmittedProps & {
  onSubmit: (values: LoginFormValues) => Promise<void>;
};

export const LoginForm = (props: LoginFormProps) => {
  const { onSubmit, ...rest } = props;

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginFormSchema),
    mode: "all",
  });

  const submitHandler = (values: LoginFormValues) => {
    onSubmit(values);
  };

  return (
    <form {...rest} onSubmit={form.handleSubmit(submitHandler)}>
      {/* Add form fields here */}
    </form>
  );
};
```

In this example:

- `LoginForm` is a presentational component that renders the form.
- It uses **React Hook Form** for handling form state and validation, with the validation schema provided by **zod**.
- The `onSubmit` handler is passed from a higher component, allowing custom submission behavior.

### **Validation Schema (login.schema.ts)**

In the `login.schema.ts` file, we define the validation logic using **zod** (you could also use **yup** or other libraries). This schema defines the rules for the form fields and types for the data that the form will handle.

```ts
import { z } from "zod";

export const LoginFormSchema = z.object({
  login: z
    .string({ required_error: "Login is required field" })
    .regex(
      REGEX_LOGIN,
      "Login must be 3-20 characters long, contain only letters, numbers, underscores, or dots, and cannot start or end with special characters."
    ),
  password: z.string({ required_error: "Password is required field" }),
});

export type LoginFormValues = z.infer<typeof LoginFormSchema>;
```

Here:

- **LoginFormSchema** uses **zod** to validate the `login` and `password` fields.
- The `LoginFormValues` type is inferred from the schema, ensuring type safety in the form component.

## **Best Practices**

- **Separation of Concerns** – Keep the form JSX, validation schema, and state management logic separated to ensure modularity and reusability.
- **Validation** – Use a dedicated validation schema, such as **zod** or **yup**, to define validation rules for each field. This keeps the form logic clean and ensures consistency across forms.
- **Form Libraries** – Use a form management library (e.g., **React Hook Form** or **Formik**) to handle the form's state, validation, and submission.

## **Conclusion**

The `forms/` folder is essential for organizing form-related logic in a clean and maintainable way. By separating form JSX, validation schemas, and leveraging form libraries like **Formik** or **React Hook Form**, we ensure that forms are reusable, extensible, and easy to manage.
