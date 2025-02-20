"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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

export const RegistrationFormSchema = z
  .object({
    name: z.string({ required_error: "Name is required field" }),
    login: z
      .string({ required_error: "Login is required field" })
      .regex(
        REGEX_LOGIN,
        "Login must be 3-20 characters long, contain only letters, numbers, underscores, or dots, and cannot start or end with special characters."
      ),
    password: z.string({ required_error: "Password is required field" }),
    confirm: z.string({ required_error: "Password mismatch" }),
  })
  .refine(({ password, confirm }) => password === confirm, "Password mismatch");

export type RegistrationFormValues = z.infer<typeof RegistrationFormSchema>;

type OmittedProps = Omit<ComponentPropsWithoutRef<"form">, "onSubmit">;
export type RegistrationFormProps = OmittedProps & {
  onSubmit: (values: RegistrationFormValues) => Promise<void>;
};

export const RegistrationForm = (props: RegistrationFormProps) => {
  const { onSubmit, className, ...rest } = props;

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(RegistrationFormSchema),
    mode: "all",
  });

  const submitHandler = (values: RegistrationFormValues) => {
    onSubmit(values);
  };

  return (
    <Form {...form}>
      <form
        {...rest}
        onSubmit={form.handleSubmit(submitHandler)}
        className={cn("grid gap-4", className)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
              <FormDescription>Must be at least 8 characters.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PasswordInput
                  {...field}
                  name="confirm"
                  placeholder="Repeat your password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="mt-2 w-full"
        >
          Create an account
        </Button>
      </form>
    </Form>
  );
};
