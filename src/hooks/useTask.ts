import { useEffect, useState } from 'react';

import type { Task } from '@/const/tasks';
import { sampleTasks } from '@/const/tasks';

export const useTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);

      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
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
