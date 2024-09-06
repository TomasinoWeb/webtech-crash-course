import dayjs from 'dayjs';
import { Plus } from 'lucide-react';
import Link from 'next/link';

import Button from '../button';

export default function Header() {
  const formattedDate = dayjs().format('ddd D MMM YYYY');

  return (
    <div className="flex w-full flex-col items-center gap-4 px-8 md:flex-row md:items-start md:justify-between md:px-0">
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-medium md:text-5xl">
          Good Morning, Totoro
        </div>
        <div className="text-base md:text-3xl">Today, {formattedDate}</div>
      </div>

      <Link href="/task/add" className="w-full md:w-fit">
        <Button className="h-fit w-full">
          <Plus /> Add Task
        </Button>
      </Link>
    </div>
  );
}
