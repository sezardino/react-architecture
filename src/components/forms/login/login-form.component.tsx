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
import { cn } from "@/utils/shadcn";
import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentPropsWithoutRef } from "react";
import { useForm } from "react-hook-form";
import { LoginFormSchema, LoginFormValues } from "./login-form.schema";

export type LoginFormProps = Omit<
  ComponentPropsWithoutRef<"form">,
  "action"
> & {
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
