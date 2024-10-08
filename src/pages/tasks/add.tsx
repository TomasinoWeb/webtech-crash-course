import { useRouter } from 'next/navigation';
import type { SubmitHandler } from 'react-hook-form';

import type { AddEditTaskInputs } from '@/components/forms/add-edit-task';
import AddEditTaskForm from '@/components/forms/add-edit-task';
import SpinnerPage from '@/components/Spinner';
import type { TagDTO, TaskStatus } from '@/hooks/dto';
import { useTags } from '@/hooks/useTags';

import Layout from '../layouts/layout';

interface AddTaskFormProps {
  tags: TagDTO[];
}

function AddTaskForm({ tags }: AddTaskFormProps) {
  const router = useRouter();

  const onSubmit: SubmitHandler<AddEditTaskInputs> = async (data) => {
    const newTask: AddEditTaskInputs = {
      name: data.name,
      description: data.description,
      tag_uuid: data.tag_uuid,
      status: data.status as TaskStatus,
      due_date: new Date(data.due_date).valueOf(),
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
    <div className="flex w-full flex-col gap-10">
      <div className="text-2xl font-medium md:text-5xl">Add Task</div>
      <AddEditTaskForm tags={tags} onSubmit={onSubmit} />
    </div>
  );
}

export default function AddTask() {
  const tagLoader = useTags();

  return (
    <Layout>
      {tagLoader.loading ? (
        <SpinnerPage />
      ) : (
        <AddTaskForm tags={tagLoader.tags} />
      )}
    </Layout>
  );
}
