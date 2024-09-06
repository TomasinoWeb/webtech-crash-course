import { useRouter } from 'next/navigation';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import Button from '@/components/button';
import type { AddEditTaskInputs } from '@/components/forms/add-edit-task';
import AddEditTaskForm from '@/components/forms/add-edit-task';
import type { Tag } from '@/const/tags';
import type { Task, TaskStatus } from '@/const/tasks';
import { useTask } from '@/hooks/useTask';
import { fetchTags } from '@/lib/tagService';

import Layout from '../layouts/layout';

interface AddTaskProps {
  tags: Tag[];
}

export default function AddTask({ tags }: AddTaskProps) {
  const router = useRouter();
  const { addTask, loading } = useTask();

  const { register, handleSubmit, formState } = useForm<AddEditTaskInputs>({
    defaultValues: {
      name: '',
      description: '',
      tag: '',
      status: '',
      due: null,
    },
  });

  const onSubmit: SubmitHandler<AddEditTaskInputs> = async (data) => {
    const newTask: Task = {
      id: Math.floor(Math.random() * 10000),
      name: data.name,
      description: data.description,
      tag: tags.find((tag) => tag.name === data.tag) || tags[0],
      status: data.status as TaskStatus,
      dueDate: data.due,
    };

    await addTask(newTask);

    router.push('/');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col gap-10">
          <div className="text-2xl font-medium md:text-5xl">Add Task</div>
          <AddEditTaskForm tags={tags} register={register} />
          <div className="flex gap-4 self-end">
            <Button variant="secondary" onClick={handleBack}>
              Cancel
            </Button>
            <Button type="submit" isLoading={loading && formState.isSubmitting}>
              Save
            </Button>
          </div>
        </div>
      </form>
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
