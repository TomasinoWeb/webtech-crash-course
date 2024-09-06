import { sampleTags, type Tag } from './tags';

export type Task = {
  name: String;
  description: String;
  status: 'Not Started' | 'In Progress' | 'Completed';
  dueDate: Date;
  tag: Tag;
};

export const sampleTasks: Task[] = [
  {
    name: 'Task 1',
    description: 'Task Description',
    status: 'Not Started',
    dueDate: new Date(),
    tag: sampleTags[0],
  },
];
