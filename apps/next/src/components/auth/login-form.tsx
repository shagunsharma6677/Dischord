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
import { LoginSchema } from '../../schemas';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export const LoginForm = () => {
  const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams?.get('error') === 'OAuthAccountNotLinked'
      ? 'Email already in use with different provider!'
      : '';
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isPending, setIsPending] = useState(true);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const router = useRouter();

  const onSubmit = async (formData: z.infer<typeof LoginSchema>) => {
    setIsPending(true);
    setErrorMessage('');
    setSuccessMessage('');
    try {
      const res = await fetch('/api/auth/Users/login', {
        method: 'POST',
        body: JSON.stringify({ ...formData }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setIsPending(false);

      if (!res.ok) {
        const response = await res.json();
        setErrorMessage(response.message);
      } else {
        const response = await res.json();

        if (response.message == 'Two factor authentication done !!!') {
          setShowTwoFactor(true);
        } else {
          setSuccessMessage(response.message);
          router.push('/settings');
        }
      }
    } catch (error) {
      console.error('Error logging-in user:', error);
      setErrorMessage(
        'An error occurred while logging-in. Please try again later.'
      );
    }
  };
  return (
    <CardWrapper
      headerLabel="We are happy to see you back again! 🎉 "
      backButtonLabel="Dont have an account ??"
      backButtonHref="/auth/register"
      showSocial
      className={'bg-[#313338]  border-none w-[480px] text-white'}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {showTwoFactor && (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Two Factor Code</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="******"
                        className="bg-neutral-800 focus:border-blue-500 border-[1px] border-zinc-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {!showTwoFactor && (
              <>
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
                      <Button
                        size={'sm'}
                        variant={'link'}
                        asChild
                        className="px-0 font-normal text-white"
                      >
                        <Link href={'/auth/reset'}>Forgot password?</Link>
                      </Button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
          </div>
          {errorMessage && <FormError message={errorMessage || urlError} />}
          {successMessage && <FormSuccess message={successMessage} />}
          <Button
            type="submit"
            className="w-full bg-[#7174f1] hover:bg-[#7174f1]  text-white"
          >
            {showTwoFactor ? 'Confirm' : 'Login'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
