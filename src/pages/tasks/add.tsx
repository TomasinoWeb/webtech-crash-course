import { useRouter } from 'next/navigation';
import type { SubmitHandler } from 'react-hook-form';

import type { AddEditTaskInputs } from '@/components/forms/add-edit-task';
import AddEditTaskForm from '@/components/forms/add-edit-task';
import type { Tag } from '@/const/tags';
import type { Task, TaskStatus } from '@/const/tasks';
import { fetchTags } from '@/lib/tagService';

import Layout from '../layouts/layout';

interface AddTaskProps {
  tags: Tag[];
}

export default function AddTask({ tags }: AddTaskProps) {
  const router = useRouter();

  const onSubmit: SubmitHandler<AddEditTaskInputs> = async (data) => {
    const newTask: Task = {
      id: Math.floor(Math.random() * 10000),
      name: data.name,
      description: data.description,
      tag: tags.find((tag) => tag.name === data.tag) || tags[0],
      status: data.status as TaskStatus,
      dueDate: data.due,
    };

    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      console.log(
        JSON.stringify(
          {
            status: 'success',
            message: 'Task added successfully',
            task: newTask,
          },
          null,
          2,
        ),
      );
    } catch (err) {
      console.error(err);
    } finally {
      router.back();
    }
  };

  return (
    <Layout>
      <div className="flex w-full flex-col gap-10">
        <div className="text-2xl font-medium md:text-5xl">Add Task</div>
        <AddEditTaskForm tags={tags} onSubmit={onSubmit} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const tags = await fetchTags();

  return {
    props: {
      tags,
    },
  };
};
