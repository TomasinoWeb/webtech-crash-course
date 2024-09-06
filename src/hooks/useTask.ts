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

  const addTask = async (newTask: Task) => {
    try {
      setLoading(true);
      setError(null);

      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      setTasks((prevTasks) => [...prevTasks, newTask]);

      console.log(
        JSON.stringify(
          {
            status: 'success',
            message: 'Task added successfully',
            task: newTask,
          },
          null,
          2,
        ),
      );
    } catch (err) {
      setError((err as Error).message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const editTask = async (newTask: Task) => {
    try {
      setLoading(true);
      setError(null);

      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === newTask.id ? { ...task, ...newTask } : task,
        ),
      );

      console.log(
        JSON.stringify(
          {
            status: 'success',
            message: 'Task edited successfully',
            task: newTask,
          },
          null,
          2,
        ),
      );
    } catch (err) {
      setError((err as Error).message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id: number) => {
    try {
      setLoading(true);
      setError(null);

      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));

      console.log(
        JSON.stringify(
          {
            status: 'success',
            message: 'Task deleted successfully',
            taskId: id,
          },
          null,
          2,
        ),
      );
    } catch (err) {
      setError((err as Error).message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    tasks,
    loading,
    error,
    addTask,
    editTask,
    deleteTask,
  };
};
