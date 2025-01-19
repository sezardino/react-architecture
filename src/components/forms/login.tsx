"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { REGEX_LOGIN } from "@/const/regexp";
import { cn } from "@/utils/shadcn";
import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentPropsWithoutRef } from "react";
import { useForm } from "react-hook-form";
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

type OmittedProps = Omit<ComponentPropsWithoutRef<"form">, "onSubmit">;
export type LoginFormProps = OmittedProps & {
  onSubmit: (values: LoginFormValues) => Promise<void>;
};

export const LoginForm = (props: LoginFormProps) => {
  const { onSubmit, className, ...rest } = props;

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginFormSchema),
    mode: "all",
  });

  const submitHandler = (values: LoginFormValues) => {
    onSubmit(values);
  };

  return (
    <Form {...form}>
      <form
        {...rest}
        className={cn("grid gap-4", className)}
        onSubmit={form.handleSubmit(submitHandler)}
      >
        <FormField
          control={form.control}
          name="login"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  name="login"
                  placeholder="Enter your login"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PasswordInput
                  {...field}
                  name="password"
                  placeholder="Enter your password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="mt-2 w-full">
          Login
        </Button>
      </form>
    </Form>
  );
};
