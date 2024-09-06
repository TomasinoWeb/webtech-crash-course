import Head from 'next/head';

import Navbar from '@/components/navbar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>Totodo</title>
      </Head>

      <Navbar />
      <div className="flex min-h-screen flex-col">
        <main className="flex grow justify-center px-4 py-10 sm:px-6 md:px-8 md:py-20 lg:px-12 xl:px-16">
          <div className="w-full max-w-screen-xl">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
