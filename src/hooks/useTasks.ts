import { useEffect, useState } from 'react';

import { sampleTasks } from '@/const/tasks';

import type { TagDTO, TaskDTO } from './dto';

export const useTasks = () => {
  const [tasks, setTasks] = useState<(TaskDTO & { tag: TagDTO })[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);

      await new Promise((resolve) => {
        setTimeout(resolve, 300);
      });

      setTasks(sampleTasks);
    } catch (err) {
      setError((err as Error).message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    loading,
    error,
  };
};
