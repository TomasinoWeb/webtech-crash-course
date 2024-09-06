import Link from 'next/link';

import Button from '@/components/button';
import Input from '@/components/input';
import Label from '@/components/label';

import LayoutAuth from './layouts/layout-auth';

export default function Login() {
  return (
    <LayoutAuth>
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <div className="w-9/12">
          <h1 className="py-10 text-center text-4xl text-slate-950  dark:text-slate-50">
            Welcome!
          </h1>
          <div className="mt-4 flex w-full flex-col">
            <Label htmlFor="input">Username</Label>
            <Input type="text" placeholder="totodo123" className="w-full" />
          </div>

          <div className="mt-8 flex w-full flex-col">
            <Label htmlFor="input">Password</Label>
            <Input
              type="text"
              placeholder="at least 8 characters"
              className="w-full"
            />
          </div>

          <Button className="mt-10 w-full">
            <div>Login</div>
          </Button>

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
