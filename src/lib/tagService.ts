import { sampleTags, type Tag } from '@/const/tags';

export const fetchTags = async (): Promise<Tag[]> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return sampleTags;
};

export const fetchTag = async (id: number): Promise<Tag | undefined> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return sampleTags.find((tag) => tag.id === id);
};
