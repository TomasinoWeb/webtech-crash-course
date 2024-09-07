import dayjs from 'dayjs';

import type { TagDTO, TaskDTO } from '@/hooks/dto';

export type FilteredTasks = {
  overdue: (TaskDTO & { tag: TagDTO })[];
  today: (TaskDTO & { tag: TagDTO })[];
  tomorrow: (TaskDTO & { tag: TagDTO })[];
  upcoming: (TaskDTO & { tag: TagDTO })[];
  noDueDate: (TaskDTO & { tag: TagDTO })[];
};

export const filterTasksByDueDate = (tasks: (TaskDTO & { tag: TagDTO })[]) => {
  const today = dayjs().startOf('day');
  const tomorrow = today.add(1, 'day');

  const filteredTasks = {
    overdue: tasks.filter(
      (task) => task.due_date && dayjs(task.due_date).isBefore(today),
    ),
    today: tasks.filter(
      (task) => task.due_date && dayjs(task.due_date).isSame(today, 'day'),
    ),
    tomorrow: tasks.filter(
      (task) => task.due_date && dayjs(task.due_date).isSame(tomorrow, 'day'),
    ),
    upcoming: tasks.filter(
      (task) => task.due_date && dayjs(task.due_date).isAfter(tomorrow, 'day'),
    ),
    noDueDate: tasks.filter((task) => !task.due_date),
  };

  return filteredTasks as FilteredTasks;
};
