import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { SubmitHandler } from 'react-hook-form';

import type { LoginRegisterInputs } from '@/components/forms/login-register';
import LoginRegisterForm from '@/components/forms/login-register';
import Label from '@/components/label';

import LayoutAuth from './layouts/layout-auth';

export default function Register() {
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginRegisterInputs> = async (data) => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      console.log(
        JSON.stringify(
          {
            status: 'success',
            message: 'Login successful',
            authData: data,
          },
          null,
          2,
        ),
      );
    } catch (err) {
      console.error(err);
    } finally {
      router.push('/');
    }
  };

  return (
    <LayoutAuth>
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <div className="w-9/12">
          <h1 className="py-10 text-center text-4xl text-slate-950  dark:text-slate-50">
            Get Started
          </h1>
          <LoginRegisterForm onSubmit={onSubmit} />

          <div className="pt-14 text-center">
            <Label htmlFor="input">
              Already have an account?{' '}
              <Link href="/login" className="font-bold underline">
                Login
              </Link>
            </Label>
          </div>
        </div>
      </div>
    </LayoutAuth>
  );
}
