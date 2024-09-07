import { sampleTasks } from '@/const/tasks';
import type { TaskDTO } from '@/hooks/dto';

export const fetchTask = async (uuid: string): Promise<TaskDTO | undefined> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const task = sampleTasks.find((sampleTask) => sampleTask.uuid === uuid);
  return task;
};
