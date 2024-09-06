import type { Task } from '@/const/tasks';
import { sampleTasks } from '@/const/tasks';

export const fetchTask = async (id: number): Promise<Task | undefined> => {
  let task: Task | undefined;
  try {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    task = sampleTasks.find((sampleTask) => sampleTask.id === id);
    if (task && task.dueDate) {
      task.dueDate = new Date(task.dueDate).toISOString();
    }
  } catch (err) {
    console.error(err);
  }
  return task;
};
