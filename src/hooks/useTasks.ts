import { useEffect, useState } from 'react';

import { api } from '@/utils/client';

import type { TagDTO, TaskDTO } from './dto';

export const useTasks = () => {
  const [tasks, setTasks] = useState<(TaskDTO & { tag: TagDTO })[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.get<{ tasks: (TaskDTO & { tag: TagDTO })[] }>(
        '/tasks',
      );
      setTasks(response.data.tasks);
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
