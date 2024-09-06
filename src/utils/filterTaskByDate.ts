import dayjs from 'dayjs';

import type { Task } from '@/const/tasks';

export type FilteredTasks = {
  overdue: Task[];
  today: Task[];
  tomorrow: Task[];
  upcoming: Task[];
  noDueDate: Task[];
};

export const filterTasksByDueDate = (tasks: Task[]) => {
  const today = dayjs().startOf('day');
  const tomorrow = today.add(1, 'day');

  const filteredTasks = {
    overdue: tasks.filter(
      (task) => task.dueDate && dayjs(task.dueDate).isBefore(today),
    ),
    today: tasks.filter(
      (task) => task.dueDate && dayjs(task.dueDate).isSame(today, 'day'),
    ),
    tomorrow: tasks.filter(
      (task) => task.dueDate && dayjs(task.dueDate).isSame(tomorrow, 'day'),
    ),
    upcoming: tasks.filter(
      (task) => task.dueDate && dayjs(task.dueDate).isAfter(tomorrow, 'day'),
    ),
    noDueDate: tasks.filter((task) => !task.dueDate),
  };

  return filteredTasks as FilteredTasks;
};
