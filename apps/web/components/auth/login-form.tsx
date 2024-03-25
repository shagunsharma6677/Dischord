"use client";
import CardWrapper from "./card-wrapper";
import Header from "./header";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@repo/ui";
import { LoginSchema } from "../../schemas";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const onSubmit = async (formData: z.infer<typeof LoginSchema>) => {
    console.log("formData", formData);
    setErrorMessage("");
    setSuccessMessage("");

    const res = await fetch("/api/auth/Users/login", {
      method: "POST",
      body: JSON.stringify({ ...formData }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      const response = await res.json();

      setSuccessMessage(response.message);
      // router.push("/");
    }
  };
  return (
    <CardWrapper
      headerLabel="Welcome back! 🎉 Happy to see you again!"
      backButtonLabel="Dont have an account ??"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="dummy@gmail.com"
                      type="email"
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="*******" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {errorMessage && <FormError message={errorMessage} />}
          {successMessage && <FormSuccess message={successMessage} />}
          <Button type="submit" className="w-full ">
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
