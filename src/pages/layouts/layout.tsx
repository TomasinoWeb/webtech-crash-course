import Head from 'next/head';
import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';

import Navbar from '@/components/navbar';
import SpinnerPage from '@/components/Spinner';
import type { UserDTO } from '@/hooks/dto';
import { api } from '@/utils/client';

export const UserContext = createContext<UserDTO | null>(null);

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<UserDTO | null>(null);

  useEffect(() => {
    api.post<{ user: UserDTO | null }>('/whoami').then((response) => {
      const userDto = response.data.user;
      console.log(userDto);
      if (userDto == null) router.push('/login');
      else setUser(userDto);
    });
  }, []);

  return (
    <UserContext.Provider value={user}>
      <Head>
        <title>Totodo</title>
      </Head>

      <Navbar />
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <main className="flex grow justify-center px-4 py-8 sm:px-6 md:px-8 md:py-12 lg:px-12 xl:px-16">
          {user == null ? (
            <SpinnerPage />
          ) : (
            <div className="w-full max-w-screen-xl">{children}</div>
          )}
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default Layout;
