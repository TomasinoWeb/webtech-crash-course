import { PrismaClient, Tag } from "@prisma/client";

export const sampleTags = [
  {
    name: "Academic",
    color: "yellow",
    description: "Things to do for school",
  },
  {
    name: "Personal",
    color: "pink",
    description: "Things to do for yourself",
  },
  {
    name: "Work",
    color: "lime",
    description: "Things to do for work",
  },
  {
    name: "Miscellaneous",
    color: "cyan",
    description: "Things to do for everything else",
  },
  {
    name: "Health",
    color: "purple",
    description: "Things to do for health",
  },
];

const dayMs = 1000 * 60 * 60 * 24;
const today = Date.now();
const yesterday = today - dayMs;
const tomorrow = today + dayMs;
const threeDaysLater = today + 3 * dayMs;
const fourDaysLater = today + 4 * dayMs;
const fiveDaysLater = today + 5 * dayMs;

export const sampleTasks = [
  {
    uuid: "ca15978d-a1ca-4119-a39e-26da7c36d3fa",
    name: "Finish Math Assignment",
    description: "Complete exercises from chapter 5",
    status: "not_yet_started",
    due_date: yesterday,
    tag_number: 0,
    user_uuid: "82ddec70-449a-4083-b965-c23f316861be",
  },
  {
    uuid: "ca15978d-a1ca-4119-a39e-26da7c36d3fb",
    name: "Read Personal Development Book",
    description: 'Read "Atomic Habits" for 30 minutes',
    status: "in_progress",
    due_date: today.valueOf(),
    tag_number: 1,
    user_uuid: "82ddec70-449a-4083-b965-c23f316861be",
  },
  {
    uuid: "ca15978d-a1ca-4119-a39e-26da7c36d3fc",
    name: "Submit Project Proposal",
    description: "Prepare and submit project proposal to the team",
    status: "completed",
    due_date: tomorrow,
    tag_number: 2,
    user_uuid: "82ddec70-449a-4083-b965-c23f316861be",
  },
  {
    uuid: "ca15978d-a1ca-4119-a39e-26da7c36d3fd",
    name: "Plan Weekend Getaway",
    description: "Organize activities for the upcoming family trip",
    status: "not_yet_started",
    due_date: threeDaysLater,
    tag_number: 1,
    user_uuid: "82ddec70-449a-4083-b965-c23f316861be",
  },
  {
    uuid: "ca15978d-a1ca-4119-a39e-26da7c36d3fe",
    name: "Doctor Appointment",
    description: "Yearly check-up with Dr. Smith",
    status: "in_progress",
    due_date: fourDaysLater,
    tag_number: 4,
    user_uuid: "82ddec70-449a-4083-b965-c23f316861be",
  },
  {
    uuid: "ca15978d-a1ca-4119-a39e-26da7c36d3ff",
    name: "Complete Health & Safety Training",
    description: "Finish mandatory training session",
    status: "completed",
    due_date: fiveDaysLater,
    tag_number: 2,
    user_uuid: "82ddec70-449a-4083-b965-c23f316861be",
  },
  {
    uuid: "ca15978d-a1ca-4119-a39e-26da7c36d4aa",
    name: "Physics Homework",
    description: "Solve problems in thermodynamics chapter",
    status: "not_yet_started",
    due_date: yesterday,
    tag_number: 0,
    user_uuid: "82ddec70-449a-4083-b965-c23f316861be",
  },
  {
    uuid: "ca15978d-a1ca-4119-a39e-26da7c36d4ab",
    name: "Grocery Shopping",
    description: "Buy groceries for the week",
    status: "in_progress",
    due_date: today.valueOf(),
    tag_number: 3,
    user_uuid: "82ddec70-449a-4083-b965-c23f316861be",
  },
  {
    uuid: "ca15978d-a1ca-4119-a39e-26da7c36d4ac",
    name: "Prepare for Client Presentation",
    description: "Finalize slides for client presentation on Thursday",
    status: "completed",
    due_date: tomorrow,
    tag_number: 2,
    user_uuid: "82ddec70-449a-4083-b965-c23f316861be",
  },
  {
    uuid: "ca15978d-a1ca-4119-a39e-26da7c36d4ad",
    name: "Renew Gym Membership",
    description: "Renew annual gym membership online",
    status: "not_yet_started",
    due_date: threeDaysLater,
    tag_number: 4,
    user_uuid: "82ddec70-449a-4083-b965-c23f316861be",
  },
  {
    uuid: "ca15978d-a1ca-4119-a39e-26da7c36d4ae",
    name: "Prepare Thesis Outline",
    description: "Create a detailed outline for your thesis",
    status: "in_progress",
    due_date: fourDaysLater,
    tag_number: 0,
    user_uuid: "82ddec70-449a-4083-b965-c23f316861be",
  },
  {
    uuid: "ca15978d-a1ca-4119-a39e-26da7c36d4af",
    name: "Meditation",
    description: "Daily 15-minute meditation practice",
    status: "completed",
    due_date: fiveDaysLater,
    tag_number: 1,
    user_uuid: "82ddec70-449a-4083-b965-c23f316861be",
  },
];

const db = new PrismaClient();
(async function () {
  const [user] = await db.user.findMany();

  if (user == null) throw new Error("No default user found, not proceeding");
  console.log(`Initializing user: ${user.username}`);

  const tags: Tag[] = [];
  for (const { color, description, name } of sampleTags) {
    const newTag = await db.tag.create({ data: { color, description, name, user_uuid: user.uuid } });
    tags.push(newTag);
  }

  for (const task of sampleTasks) {
    const newTask = await db.task.create({
      data: {
        name: task.name,
        description: task.description,
        status: task.status,
        due_date: new Date(task.due_date),
        tag_uuid: tags[task.tag_number].uuid,
        user_uuid: user.uuid,
      },
    });
  }
})();
