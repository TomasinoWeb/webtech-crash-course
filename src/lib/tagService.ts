import { sampleTags } from '@/const/tags';
import type { TagDTO } from '@/hooks/dto';

export const fetchTags = async (): Promise<TagDTO[]> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return sampleTags;
};

export const fetchTag = async (uuid: string): Promise<TagDTO | undefined> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return sampleTags.find((tag) => tag.uuid === uuid);
};
