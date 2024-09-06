import { Calendar, Trash } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Badge from '../badge';
import Button from '../button';

export default function TaskCard() {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className={twMerge(
        'flex justify-between gap-6 rounded-xl border border-slate-200 bg-slate-100 px-9 py-6 transition duration-700 hover:opacity-100 cursor-pointer group',
        checked && 'opacity-40',
      )}
    >
      <div className="flex flex-1 gap-5">
        <input
          type="checkbox"
          className="size-8 flex-initial cursor-pointer rounded-sm bg-slate-300 accent-slate-700"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex gap-4">
            <div className="text-2xl font-medium">Task name</div>
            <Badge color="yellow" text="Yellow" />
            <Badge color="grey" text="Not Started" dot />
          </div>
          <div className="text-sm text-slate-400">Task Description</div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex h-fit flex-initial gap-2.5 rounded-md bg-slate-200 px-4 py-2 text-slate-700">
          <Calendar /> Sep 2
        </div>
        <Button variant="destructive" className="hidden group-hover:inline">
          <Trash width={17} height={21} />
        </Button>
      </div>
    </div>
  );
}
