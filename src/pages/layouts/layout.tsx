import Footer from '../components/footer';
import Navbar from '../components/navbar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen flex-col">
        <main className="flex grow items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="w-full max-w-4xl">{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
