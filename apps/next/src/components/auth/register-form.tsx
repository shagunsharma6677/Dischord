'use client';
import CardWrapper from './card-wrapper';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@repo/ui';
import { RegisterSchema } from '../../schemas';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const onSubmit = async (formData: z.infer<typeof RegisterSchema>) => {
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const res = await fetch('/api/auth/Users/register', {
        method: 'POST',
        body: JSON.stringify({ ...formData }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        const response = await res.json();
        setErrorMessage(response.message);
      } else {
        router.refresh();
        router.push('/');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setErrorMessage(
        'An error occurred while registering. Please try again later.'
      );
    }
  };

  return (
    <CardWrapper
      headerLabel="Create an account! 🎉"
      backButtonLabel="Already have an account ??"
      backButtonHref="/auth/login"
      showSocial
      className={'bg-[#313338]  border-none w-[500px] text-white'}
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
                      className="bg-neutral-800 focus:border-blue-500 border-[1px] border-zinc-800"
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
                    <Input
                      {...field}
                      placeholder="*******"
                      type="password"
                      className="bg-neutral-800 focus:border-blue-500 border-[1px] border-zinc-800"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Username"
                      type="text"
                      className="bg-neutral-800 focus:border-blue-500 border-[1px] border-zinc-800"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {errorMessage && <FormError message={errorMessage} />}
          {successMessage && <FormSuccess message={successMessage} />}

          <Button
            type="submit"
            className="w-full bg-[#7174f1] hover:bg-[#7174f1]  text-white"
          >
            Create an account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
