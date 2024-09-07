import { useRouter } from 'next/navigation';
import type { SubmitHandler } from 'react-hook-form';

import type { AddEditTaskInputs } from '@/components/forms/add-edit-task';
import AddEditTaskForm from '@/components/forms/add-edit-task';
import type { Tag } from '@/const/tags';
import type { Task, TaskStatus } from '@/const/tasks';
import { fetchTags } from '@/lib/tagService';
import { fetchTask } from '@/lib/tasksService';
import Layout from '@/pages/layouts/layout';

interface EditTaskProps {
  task: Task;
  tags: Tag[];
}

export default function EditTask({ task, tags }: EditTaskProps) {
  const router = useRouter();

  const onSubmit: SubmitHandler<AddEditTaskInputs> = async (data) => {
    const editedTask: Task = {
      ...task,
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
            message: 'Task edited successfully',
            task: editedTask,
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
        <div className="text-2xl font-medium md:text-5xl">
          Edit Task #{task?.id}
        </div>
        <AddEditTaskForm task={task} tags={tags} onSubmit={onSubmit} />
      </div>
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

  if (!task || !tags) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      task,
      tags,
    },
  };
}
