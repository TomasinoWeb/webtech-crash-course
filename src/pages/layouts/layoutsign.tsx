function LayoutSign({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex min-h-screen flex-col bg-slate-50 py-10 dark:bg-slate-950">
        <main className="flex grow items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="w-full max-w-4xl">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default LayoutSign;
