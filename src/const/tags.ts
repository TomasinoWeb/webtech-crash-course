export type Tag = {
  id: number;
  name: string;
  color: 'yellow' | 'pink' | 'lime' | 'cyan' | 'purple';
  description: string;
};

export const sampleTags: Tag[] = [
  {
    id: 1,
    name: 'Academic',
    color: 'yellow',
    description: 'Things to do for school',
  },
  {
    id: 2,
    name: 'Personal',
    color: 'pink',
    description: 'Things to do for yourself',
  },
  {
    id: 3,
    name: 'Work',
    color: 'lime',
    description: 'Things to do for work',
  },
  {
    id: 4,
    name: 'Miscellaneous',
    color: 'cyan',
    description: 'Things to do for everything else',
  },
  {
    id: 5,
    name: 'Health',
    color: 'purple',
    description: 'Things to do for health',
  },
];
