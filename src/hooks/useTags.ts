import { useEffect, useState } from 'react';

import { api } from '@/utils/client';

import type { TagDTO, TaskDTO } from './dto';

export const useTags = () => {
  const [tags, setTags] = useState<(TagDTO & { tasks: TaskDTO[] })[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTags = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.get<{
        tags: (TagDTO & { tasks: TaskDTO[] })[];
      }>('/tags');
      setTags(response.data.tags);
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
