import dayjs from 'dayjs';
import { Calendar, Trash } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import type { Task } from '@/const/tasks';

import Badge from '../badge';
import Button from '../button';
import ProgressBadge from './progress-badge';

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  const [checked, setChecked] = useState(false);
  const formattedDate = dayjs(task.dueDate).format('MMM D');

  return (
    <div
      className={twMerge(
        'flex flex-col md:flex-row justify-between gap-6 rounded-xl border border-slate-200 bg-slate-100 px-9 py-6 transition duration-700 hover:opacity-100 cursor-pointer group dark:bg-slate-900 dark:border-slate-800',
        checked && 'opacity-40',
      )}
    >
      <div className="flex flex-1 gap-5">
        <input
          type="checkbox"
          className="size-5 flex-initial cursor-pointer rounded-sm bg-slate-300 accent-slate-700 md:size-8 dark:accent-slate-200"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
        <div className="flex flex-1 flex-col gap-x-2 gap-y-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="text-xl font-medium md:text-2xl">{task.name}</div>
            <div className="flex flex-wrap gap-2.5">
              <Badge color={task.tag.color} text={task.tag.name} />
              <ProgressBadge status={task.status} />
            </div>
          </div>
          <div className="text-xs text-slate-400 md:text-sm dark:text-slate-500">
            {task.description}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 self-end md:self-start">
        <div className="flex h-fit flex-initial items-center gap-2.5 rounded-md bg-slate-200 px-4 py-2 text-sm text-slate-700 md:text-base dark:bg-slate-800 dark:text-slate-200">
          <Calendar className="size-4 md:size-6" /> {formattedDate}
        </div>
        <Button variant="destructive" className="hidden group-hover:inline">
          <Trash width={17} height={21} />
        </Button>
      </div>
    </div>
  );
}
