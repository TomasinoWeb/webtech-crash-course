import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { SubmitHandler } from 'react-hook-form';

import type { LoginRegisterInputs } from '@/components/forms/login-register';
import LoginRegisterForm from '@/components/forms/login-register';
import Label from '@/components/label';
import { api } from '@/utils/client';

import LayoutAuth from './layouts/layout-auth';

export default function Login() {
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginRegisterInputs> = async (data) => {
    try {
      const response = await api.post<{ success: boolean }>('/login', {
        username: data.username,
        password: data.password,
      });

      if (response.data.success === true) router.push('/');
      else router.push('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <LayoutAuth>
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <div className="w-9/12">
          <h1 className="py-10 text-center text-4xl text-slate-950  dark:text-slate-50">
            Welcome!
          </h1>
          <LoginRegisterForm onSubmit={onSubmit} />
          <div className="pt-14 text-center">
            <Label htmlFor="input">
              Don’t have an account?{' '}
              <Link href="/register" className="font-bold underline">
                Signup
              </Link>
            </Label>
          </div>
        </div>
      </div>
    </LayoutAuth>
  );
}
