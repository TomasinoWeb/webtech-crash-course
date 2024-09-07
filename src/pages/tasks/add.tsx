import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import Button from '@/components/button';
import type {
  AddEditTaskFormInput,
  AddEditTaskInputs,
} from '@/components/forms/add-edit-task';
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
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm<AddEditTaskFormInput>({
    defaultValues: {
      name: '',
      description: '',
      status: '',
      tag_uuid: '',
      due_date: new Date(Date.now()).toISOString().split('T')[0],
    },
  });

  const onSubmit: SubmitHandler<AddEditTaskFormInput> = async (data) => {
    const newTask: AddEditTaskInputs = {
      name: data.name,
      description: data.description,
      tag_uuid: data.tag_uuid,
      status: data.status as TaskStatus,
      due_date: new Date(data.due_date).valueOf(),
    };

    try {
      setLoading(true);

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
      setLoading(false);
      router.back();
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full flex-col gap-10">
        <div className="text-2xl font-medium md:text-5xl">Add Task</div>
        <AddEditTaskForm tags={tags} register={register} />
        <div className="flex gap-4 self-end">
          <Button type="button" variant="secondary" onClick={handleBack}>
            Cancel
          </Button>
          <Button type="submit" isLoading={loading}>
            Save
          </Button>
        </div>
      </div>
    </form>
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
