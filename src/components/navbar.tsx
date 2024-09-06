import { LayoutGrid, List, LogOut, Menu, Moon, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState('');
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu

  const toggleTheme = () => {
    console.log('Toggle theme function called');
    const newTheme = theme === 'dark' ? 'light' : 'dark'; // Fix toggle logic
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark'); // Remove both classes
    document.documentElement.classList.add(newTheme); // Add the new theme class
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Fix typo
    setTheme(savedTheme);
    document.documentElement.classList.remove('light', 'dark'); // Remove both classes
    document.documentElement.classList.add(savedTheme); // Add the saved theme class
  }, []);

  const navigationItems = [
    {
      name: (
        <div className="flex items-center">
          <List className="mr-2" /> List
        </div>
      ),
      href: '/tasks',
    },
    {
      name: (
        <div className="flex items-center">
          <LayoutGrid className="mr-2" />
          Tags
        </div>
      ),
      href: '/tags',
    },
    {
      name: (
        <div
          className="flex cursor-pointer items-center rounded-md border border-gray-300 p-2"
          onClick={() => toggleTheme()}
        >
          <Moon />
          <p className="ml-2 sm:hidden">Darkmode</p>
        </div>
      ),
      href: '#',
    },
    {
      name: (
        <div className="flex items-center rounded-md border border-gray-300 p-2">
          <LogOut className="mr-2" />
          Logout
        </div>
      ),
      href: '#',
    },
  ];

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
                  aria-current={currentPath === item.href ? 'page' : undefined}
                  className={classNames(
                    currentPath === item.href
                      ? 'bg-gray-900 text-slate-100'
                      : 'hover:bg-gray-700 hover:text-white',
                    'flex items-center rounded-md px-3 py-2 text-sm font-medium',
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
                aria-current={currentPath === item.href ? 'page' : undefined}
                className={classNames(
                  currentPath === item.href
                    ? 'bg-gray-900 text-slate-100'
                    : 'hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
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
