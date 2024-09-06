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

  return {
    tags,
    loading,
    error,
    fetchTag,
  };
};
