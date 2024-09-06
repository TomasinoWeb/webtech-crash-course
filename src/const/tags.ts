export type Tag = {
  name: string;
  color: 'yellow' | 'pink' | 'lime' | 'cyan' | 'purple';
  description: string;
};

export const sampleTags: Tag[] = [
  {
    name: 'Academic',
    color: 'yellow',
    description: 'Things to do for school',
  },
  {
    name: 'Personal',
    color: 'pink',
    description: 'Things to do for yourself',
  },
  {
    name: 'Work',
    color: 'lime',
    description: 'Things to do for work',
  },
  {
    name: 'Miscellaneous',
    color: 'cyan',
    description: 'Things to do for everything else',
  },
  {
    name: 'Health',
    color: 'purple',
    description: 'Things to do for health',
  },
];
