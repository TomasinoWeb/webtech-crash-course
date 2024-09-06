import { Plus } from 'lucide-react';
import Link from 'next/link';

import Button from '../button';

interface HeaderProps {
  title: string;
  subtitle: string;
  href: string;
  buttonText: string;
}

export default function Header({
  title,
  subtitle,
  href,
  buttonText,
}: HeaderProps) {
  return (
    <div className="flex w-full flex-col items-center gap-4 px-8 md:flex-row md:items-start md:justify-between md:px-0">
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-medium md:text-5xl">{title}</div>
        <div className="text-base md:text-3xl">{subtitle}</div>
      </div>

      <Link href={href} className="w-full md:w-fit">
        <Button className="h-fit w-full">
          <Plus /> {buttonText}
        </Button>
      </Link>
    </div>
  );
}
