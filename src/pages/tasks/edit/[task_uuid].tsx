import { useRouter } from 'next/router';
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
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm<AddEditTaskFormInput>({
    defaultValues: {
      name: task.name,
      description: task.description,
      tag_uuid: task.tag_uuid,
      status: task.status,
      due_date: new Date(task.due_date).toISOString().split('T')[0],
    },
  });

  const onSubmit: SubmitHandler<AddEditTaskFormInput> = async (data) => {
    const editedTask: AddEditTaskInputs = {
      ...task,
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
      setLoading(false);
      router.push('/');
    }
  };
  const handleBack = () => {
    router.back();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full flex-col gap-10">
        <div className="text-2xl font-medium md:text-5xl">
          Edit Task {task?.name}
        </div>
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
