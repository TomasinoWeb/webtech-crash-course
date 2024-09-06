import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { LayoutGrid, List, LogOut, Menu, Moon, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navigationItems = [
  {
    name: (
      <div className="flex items-center">
        <List className="mr-2" /> List
      </div>
    ),
    href: '/tags/list',
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
      <div className="flex items-center rounded-md border border-gray-300 p-2">
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Current path
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo section */}
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <h2 className="p-5 text-xl font-bold text-white">Totodo</h2>
                </div>
              </div>

              {/* Navigation links for desktop */}
              <div className="hidden sm:ml-auto sm:flex sm:items-center">
                <div className="flex space-x-4">
                  {navigationItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      aria-current={
                        currentPath === item.href ? 'page' : undefined
                      }
                      className={classNames(
                        currentPath === item.href
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'flex items-center rounded-md px-3 py-2 text-sm font-medium',
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <X className="size-6" />
                  ) : (
                    <Menu className="size-6" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigationItems.map((item, index) => (
                <DisclosureButton
                  key={index}
                  as="a"
                  href={item.href}
                  aria-current={currentPath === item.href ? 'page' : undefined}
                  className={classNames(
                    currentPath === item.href
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
