import dayjs from 'dayjs';

import type { TagDTO, TaskDTO } from '@/hooks/dto';

import { sampleTags } from './tags';

const today = dayjs();
const yesterday = today.subtract(1, 'day').valueOf();
const tomorrow = today.add(1, 'day').valueOf();
const threeDaysLater = today.add(3, 'day').valueOf();
const fourDaysLater = today.add(4, 'day').valueOf();
const fiveDaysLater = today.add(5, 'day').valueOf();

export const sampleTasks: (TaskDTO & { tag: TagDTO })[] = [
  {
    uuid: 'ca15978d-a1ca-4119-a39e-26da7c36d3fa',
    name: 'Finish Math Assignment',
    description: 'Complete exercises from chapter 5',
    status: 'not_yet_started',
    due_date: yesterday,
    tag: sampleTags[0],
    tag_uuid: sampleTags[0].uuid,
    user_uuid: '82ddec70-449a-4083-b965-c23f316861be',
  },
  {
    uuid: 'ca15978d-a1ca-4119-a39e-26da7c36d3fb',
    name: 'Read Personal Development Book',
    description: 'Read "Atomic Habits" for 30 minutes',
    status: 'in_progress',
    due_date: today.valueOf(),
    tag: sampleTags[1],
    tag_uuid: sampleTags[1].uuid,
    user_uuid: '82ddec70-449a-4083-b965-c23f316861be',
  },
  {
    uuid: 'ca15978d-a1ca-4119-a39e-26da7c36d3fc',
    name: 'Submit Project Proposal',
    description: 'Prepare and submit project proposal to the team',
    status: 'completed',
    due_date: tomorrow,
    tag: sampleTags[2],
    tag_uuid: sampleTags[2].uuid,
    user_uuid: '82ddec70-449a-4083-b965-c23f316861be',
  },
  {
    uuid: 'ca15978d-a1ca-4119-a39e-26da7c36d3fd',
    name: 'Plan Weekend Getaway',
    description: 'Organize activities for the upcoming family trip',
    status: 'not_yet_started',
    due_date: threeDaysLater,
    tag: sampleTags[1],
    tag_uuid: sampleTags[1].uuid,
    user_uuid: '82ddec70-449a-4083-b965-c23f316861be',
  },
  {
    uuid: 'ca15978d-a1ca-4119-a39e-26da7c36d3fe',
    name: 'Doctor Appointment',
    description: 'Yearly check-up with Dr. Smith',
    status: 'in_progress',
    due_date: fourDaysLater,
    tag: sampleTags[4],
    tag_uuid: sampleTags[4].uuid,
    user_uuid: '82ddec70-449a-4083-b965-c23f316861be',
  },
  {
    uuid: 'ca15978d-a1ca-4119-a39e-26da7c36d3ff',
    name: 'Complete Health & Safety Training',
    description: 'Finish mandatory training session',
    status: 'completed',
    due_date: fiveDaysLater,
    tag: sampleTags[2],
    tag_uuid: sampleTags[2].uuid,
    user_uuid: '82ddec70-449a-4083-b965-c23f316861be',
  },
  {
    uuid: 'ca15978d-a1ca-4119-a39e-26da7c36d4aa',
    name: 'Physics Homework',
    description: 'Solve problems in thermodynamics chapter',
    status: 'not_yet_started',
    due_date: yesterday,
    tag: sampleTags[0],
    tag_uuid: sampleTags[0].uuid,
    user_uuid: '82ddec70-449a-4083-b965-c23f316861be',
  },
  {
    uuid: 'ca15978d-a1ca-4119-a39e-26da7c36d4ab',
    name: 'Grocery Shopping',
    description: 'Buy groceries for the week',
    status: 'in_progress',
    due_date: today.valueOf(),
    tag: sampleTags[3],
    tag_uuid: sampleTags[3].uuid,
    user_uuid: '82ddec70-449a-4083-b965-c23f316861be',
  },
  {
    uuid: 'ca15978d-a1ca-4119-a39e-26da7c36d4ac',
    name: 'Prepare for Client Presentation',
    description: 'Finalize slides for client presentation on Thursday',
    status: 'completed',
    due_date: tomorrow,
    tag: sampleTags[2],
    tag_uuid: sampleTags[2].uuid,
    user_uuid: '82ddec70-449a-4083-b965-c23f316861be',
  },
  {
    uuid: 'ca15978d-a1ca-4119-a39e-26da7c36d4ad',
    name: 'Renew Gym Membership',
    description: 'Renew annual gym membership online',
    status: 'not_yet_started',
    due_date: threeDaysLater,
    tag: sampleTags[4],
    tag_uuid: sampleTags[4].uuid,
    user_uuid: '82ddec70-449a-4083-b965-c23f316861be',
  },
  {
    uuid: 'ca15978d-a1ca-4119-a39e-26da7c36d4ae',
    name: 'Prepare Thesis Outline',
    description: 'Create a detailed outline for your thesis',
    status: 'in_progress',
    due_date: fourDaysLater,
    tag: sampleTags[0],
    tag_uuid: sampleTags[0].uuid,
    user_uuid: '82ddec70-449a-4083-b965-c23f316861be',
  },
  {
    uuid: 'ca15978d-a1ca-4119-a39e-26da7c36d4af',
    name: 'Meditation',
    description: 'Daily 15-minute meditation practice',
    status: 'completed',
    due_date: fiveDaysLater,
    tag: sampleTags[1],
    tag_uuid: sampleTags[1].uuid,
    user_uuid: '82ddec70-449a-4083-b965-c23f316861be',
  },
];
