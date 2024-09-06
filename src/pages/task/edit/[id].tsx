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
import { fetchTask } from '@/lib/tasksService';
import Layout from '@/pages/layouts/layout';

interface EditTaskProps {
  task: Task;
  tags: Tag[];
}

export default function EditTask({ task, tags }: EditTaskProps) {
  const router = useRouter();
  const { editTask, loading } = useTask();

  const { register, handleSubmit } = useForm<AddEditTaskInputs>({
    defaultValues: {
      name: task?.name ?? '',
      description: task?.description ?? '',
      tag: task?.tag.name ?? '',
      status: task?.status ?? '',
      due: task?.dueDate
        ? new Date(task.dueDate).toISOString().split('T')[0]
        : '',
    },
  });

  const onSubmit: SubmitHandler<AddEditTaskInputs> = async (data) => {
    const editedTask: Task = {
      ...task,
      name: data.name,
      description: data.description,
      tag: tags.find((tag) => tag.name === data.tag) || tags[0],
      status: data.status as TaskStatus,
      dueDate: data.due,
    };

    await editTask(editedTask);

    router.push('/');
  };
  const handleBack = () => {
    router.back();
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col gap-10">
          <div className="text-2xl font-medium md:text-5xl">
            Edit Task #{task?.id}
          </div>
          <AddEditTaskForm tags={tags} register={register} />
          <div className="flex gap-4 self-end">
            <Button variant="secondary" onClick={handleBack}>
              Cancel
            </Button>
            <Button type="submit" isLoading={loading}>
              Save
            </Button>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  const task = await fetchTask(Number(params.id));
  const tags = await fetchTags();
  return {
    props: {
      task,
      tags,
    },
  };
}
