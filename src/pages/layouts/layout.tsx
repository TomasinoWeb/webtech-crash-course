import Head from 'next/head';

import Navbar from '@/components/navbar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Totodo</title>
      </Head>

      <Navbar />
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <main className="flex grow justify-center px-4 py-10 sm:px-6 md:px-8 md:py-20 lg:px-12 xl:px-16">
          <div className="w-full max-w-screen-xl">{children}</div>
        </main>
      </div>
    </>
  );
}

export default Layout;
