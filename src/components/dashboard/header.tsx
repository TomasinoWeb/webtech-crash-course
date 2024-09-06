import type { ReactNode } from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
  buttonSide: ReactNode;
}

export default function Header({ title, subtitle, buttonSide }: HeaderProps) {
  return (
    <div className="flex w-full flex-col items-center gap-4 px-8 md:flex-row md:items-start md:justify-between md:px-0">
      <div className="flex w-full flex-1 flex-col gap-2">
        <div className="text-2xl font-medium md:text-5xl">{title}</div>
        <div className="text-base md:text-3xl">{subtitle}</div>
      </div>

      <div className="flex w-full flex-col gap-4 md:w-fit md:flex-row">
        {buttonSide}
      </div>
    </div>
  );
}
