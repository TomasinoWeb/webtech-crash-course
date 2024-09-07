import { useRouter } from 'next/router';
import type { SubmitHandler } from 'react-hook-form';

import type { AddEditTaskInputs } from '@/components/forms/add-edit-task';
import AddEditTaskForm from '@/components/forms/add-edit-task';
import SpinnerPage from '@/components/Spinner';
import type { TagDTO, TaskDTO, TaskStatus } from '@/hooks/dto';
import { useTags } from '@/hooks/useTags';
import { useTasks } from '@/hooks/useTasks';
import Layout from '@/pages/layouts/layout';

interface EditTaskFormProps {
  task: TaskDTO;
  tags: TagDTO[];
}

function EditTaskForm({ task, tags }: EditTaskFormProps) {
  const router = useRouter();

  const onSubmit: SubmitHandler<AddEditTaskInputs> = async (data) => {
    const editedTask: AddEditTaskInputs = {
      ...task,
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
      router.push('/');
    }
  };

  return (
    <div className="flex w-full flex-col gap-10">
      <div className="text-2xl font-medium md:text-5xl">
        Edit Task {task.name}
      </div>
      <AddEditTaskForm task={task} tags={tags} onSubmit={onSubmit} />
    </div>
  );
}

export default function EditTask() {
  const router = useRouter();
  const { task_uuid } = router.query;
  const taskLoader = useTasks();
  const tagsLoader = useTags();

  return (
    <Layout>
      {taskLoader.loading || tagsLoader.loading ? (
        <SpinnerPage />
      ) : (
        <EditTaskForm
          task={taskLoader.tasks.find((task) => task.uuid === task_uuid)!}
          tags={tagsLoader.tags}
        />
      )}
    </Layout>
  );
}
