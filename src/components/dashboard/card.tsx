import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import type { TagColors } from '@/hooks/dto';

const colorClasses = {
  yellow:
    'border-yellow-300 bg-yellow-100 text-yellow-900 dark:border-yellow-700 dark:bg-yellow-800 dark:text-yellow-100',
  pink: 'border-pink-300 bg-pink-100 text-pink-900 dark:border-pink-700 dark:bg-pink-800 dark:text-pink-100',
  lime: 'border-lime-300 bg-lime-100 text-lime-900 dark:border-lime-700 dark:bg-lime-800 dark:text-lime-100',
  cyan: 'border-cyan-300 bg-cyan-100 text-cyan-900 dark:border-cyan-700 dark:bg-cyan-800 dark:text-cyan-100',
  purple:
    'border-purple-300 bg-purple-100 text-purple-900 dark:border-purple-700 dark:bg-purple-800 dark:text-purple-100',
};

interface CardProps {
  uuid: string;
  title: string;
  task: string;
  color: TagColors;
}

const Card: React.FC<CardProps> = ({ uuid, title, task, color }) => {
  return (
    <Link href={`/tags/${uuid}`}>
      <div
        className={twMerge(
          'size-full rounded-xl border shadow-lg m-2 p-4',
          colorClasses[color],
        )}
      >
        <div className="w-full p-4">
          <h2 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-50">
            {title}
          </h2>
          <p className="mb-4 text-slate-500 dark:text-slate-400">{task}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
