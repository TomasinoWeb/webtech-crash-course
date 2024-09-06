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

  const addTask = () => {
    // const newTask: Task = {
    //   id: tasks.length + 1,
    //   title,
    //   completed: false,
    // };
    // setTasks([...tasks, newTask]);
    // console.log('Task added:', newTask);
  };

  const editTask = () => {
    // const updatedTasks = tasks.map((task) =>
    //   task.id === id ? { ...task, title: updatedTitle } : task,
    // );
    // setTasks(updatedTasks);
    // console.log(`Task with ID ${id} edited to:`, updatedTitle);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    console.log(`Task with ID ${id} deleted`);
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
