import { useEffect, useState } from 'react';

import { sampleTags } from '@/const/tags';

import type { TagDTO } from './dto';

export const useTags = () => {
  const [tags, setTags] = useState<TagDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTags = async () => {
    try {
      setLoading(true);
      setError(null);

      await new Promise((resolve) => {
        setTimeout(resolve, 300);
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

  const fetchTag = (uuid: string) => {
    return tags.find((tag) => tag.uuid === uuid)!;
  };

  return {
    tags,
    loading,
    error,
    fetchTag,
  };
};
