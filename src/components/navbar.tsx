import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { navigationItems } from './navbar/nav-items';

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <nav className="border-2 border-slate-200 bg-slate-100 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link href="/">
                <h2 className="p-5 text-2xl font-bold md:text-4xl">Totodo</h2>
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-auto sm:flex sm:items-center">
            <div className="flex space-x-4">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  aria-current={
                    currentPath.startsWith(item.href) ? 'page' : undefined
                  }
                  className={twMerge(
                    'flex items-center rounded-md px-3 py-2 text-sm font-medium',
                    currentPath.startsWith(item.href)
                      ? 'bg-gray-900 text-slate-100'
                      : 'hover:bg-gray-700 hover:text-white',
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu state
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                aria-current={
                  currentPath.startsWith(item.href) ? 'page' : undefined
                }
                className={twMerge(
                  'block rounded-md px-3 py-2 text-base font-medium',
                  currentPath.startsWith(item.href)
                    ? 'bg-gray-900 text-slate-100'
                    : 'hover:bg-gray-700 hover:text-white',
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
