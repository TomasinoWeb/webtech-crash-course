import dayjs from 'dayjs';

import { sampleTags, type Tag } from './tags';

export type Task = {
  id: number;
  name: string;
  description: string;
  status: TaskStatus;
  dueDate: Date;
  tag: Tag;
};

export type TaskStatus = 'Not Started' | 'In Progress' | 'Completed';

const today = dayjs();
const yesterday = today.subtract(1, 'day').toDate();
const tomorrow = today.add(1, 'day').toDate();
const threeDaysLater = today.add(3, 'day').toDate();
const fourDaysLater = today.add(4, 'day').toDate();
const fiveDaysLater = today.add(5, 'day').toDate();

export const sampleTasks: Task[] = [
  {
    id: 1,
    name: 'Finish Math Assignment',
    description: 'Complete exercises from chapter 5',
    status: 'Not Started',
    dueDate: yesterday,
    tag: sampleTags[0],
  },
  {
    id: 2,
    name: 'Read Personal Development Book',
    description: 'Read "Atomic Habits" for 30 minutes',
    status: 'In Progress',
    dueDate: today.toDate(),
    tag: sampleTags[1],
  },
  {
    id: 3,
    name: 'Submit Project Proposal',
    description: 'Prepare and submit project proposal to the team',
    status: 'Completed',
    dueDate: tomorrow,
    tag: sampleTags[2],
  },
  {
    id: 4,
    name: 'Plan Weekend Getaway',
    description: 'Organize activities for the upcoming family trip',
    status: 'Not Started',
    dueDate: threeDaysLater,
    tag: sampleTags[1],
  },
  {
    id: 5,
    name: 'Doctor Appointment',
    description: 'Yearly check-up with Dr. Smith',
    status: 'In Progress',
    dueDate: fourDaysLater,
    tag: sampleTags[4],
  },
  {
    id: 6,
    name: 'Complete Health & Safety Training',
    description: 'Finish mandatory training session',
    status: 'Completed',
    dueDate: fiveDaysLater,
    tag: sampleTags[2],
  },
  {
    id: 7,
    name: 'Physics Homework',
    description: 'Solve problems in thermodynamics chapter',
    status: 'Not Started',
    dueDate: yesterday,
    tag: sampleTags[0],
  },
  {
    id: 8,
    name: 'Grocery Shopping',
    description: 'Buy groceries for the week',
    status: 'In Progress',
    dueDate: today.toDate(),
    tag: sampleTags[3],
  },
  {
    id: 9,
    name: 'Prepare for Client Presentation',
    description: 'Finalize slides for client presentation on Thursday',
    status: 'Completed',
    dueDate: tomorrow,
    tag: sampleTags[2],
  },
  {
    id: 10,
    name: 'Renew Gym Membership',
    description: 'Renew annual gym membership online',
    status: 'Not Started',
    dueDate: threeDaysLater,
    tag: sampleTags[4],
  },
  {
    id: 11,
    name: 'Prepare Thesis Outline',
    description: 'Create a detailed outline for your thesis',
    status: 'In Progress',
    dueDate: fourDaysLater,
    tag: sampleTags[0],
  },
  {
    id: 12,
    name: 'Meditation',
    description: 'Daily 15-minute meditation practice',
    status: 'Completed',
    dueDate: fiveDaysLater,
    tag: sampleTags[1],
  },
];
