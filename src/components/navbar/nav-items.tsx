import { LayoutGrid, List, LogOut } from 'lucide-react';

import ThemeToggle from './theme-toggle';

interface NavigationItem {
  name: React.ReactNode;
  href: string;
}

export const navigationItems: NavigationItem[] = [
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
    name: <ThemeToggle />,
    href: '#',
  },
  {
    name: (
      <div className="flex items-center rounded-md border border-gray-300 p-2">
        <LogOut className="mr-2" />
        Logout
      </div>
    ),
    href: '/login',
  },
];
