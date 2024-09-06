import React from 'react';

import TaskCard from './task-card';

interface TaskListProps {
  title: string;
  tasks: any[];
}

const TaskList = ({ title, tasks }: TaskListProps) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-5 rounded-xl bg-slate-200 p-6 dark:bg-slate-800">
      <div className="flex items-center gap-2">
        <div className="font-semibold uppercase dark:text-slate-400">
          {title}
        </div>
        <div className="bg-slate-300 px-1.5 text-center text-sm font-semibold dark:bg-slate-600">
          {tasks.length}
        </div>
      </div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
