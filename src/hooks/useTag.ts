import { useEffect, useState } from 'react';

import { sampleTags, type Tag } from '@/const/tags';

export const useTag = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTags = async () => {
    try {
      setLoading(true);
      setError(null);

      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

      setTags(sampleTags);
    } catch (err) {
      setError((err as Error).message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTag = (id: number) => {
    return tags.find((tag) => tag.id === id);
  };

  const addTag = () => {
    // const newTask: Task = {
    //   id: tasks.length + 1,
    //   title,
    //   completed: false,
    // };
    // setTasks([...tasks, newTask]);
    // console.log('Task added:', newTask);
  };

  const editTag = () => {
    // const updatedTasks = tasks.map((task) =>
    //   task.id === id ? { ...task, title: updatedTitle } : task,
    // );
    // setTasks(updatedTasks);
    // console.log(`Task with ID ${id} edited to:`, updatedTitle);
  };

  const deleteTag = (id: number) => {
    const updatedTags = tags.filter((tag) => tag.id !== id);
    setTags(updatedTags);
    console.log(`Tag with ID ${id} deleted`);
  };

  return {
    tags,
    loading,
    error,
    fetchTag,
    addTag,
    editTag,
    deleteTag,
  };
};
