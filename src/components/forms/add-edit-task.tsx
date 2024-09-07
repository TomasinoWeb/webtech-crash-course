import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import Input from '@/components/input';
import Label from '@/components/label';
import Select from '@/components/select';
import type { Tag } from '@/const/tags';
import type { Task } from '@/const/tasks';

import Button from '../button';
import TextArea from '../text-area';

export interface AddEditTaskInputs {
  name: string;
  description: string;
  tag: string;
  status: string;
  due: Date | string | null;
}

interface AddEditTaskFormProps {
  task?: Task;
  tags: Tag[];
  onSubmit: (data: AddEditTaskInputs) => void;
}

export default function AddEditTaskForm({
  task,
  tags,
  onSubmit,
}: AddEditTaskFormProps) {
  const { register, handleSubmit, formState } = useForm<AddEditTaskInputs>({
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
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
      <div className="flex w-full flex-col gap-x-11 gap-y-4 md:flex-row">
        <div className="flex flex-1 flex-col gap-x-7 gap-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Task Name</Label>
            <Input id="name" placeholder="Task Name" {...register('name')} />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <TextArea
              placeholder="Task Description"
              {...register('description')}
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-x-7 gap-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="tag">Tag</Label>
            <Select
              id="tag"
              placeholder="Select Tag"
              options={tags.map((tag) => tag.name)}
              {...register('tag')}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="status">Status</Label>
            <Select
              id="status"
              placeholder="Select Status"
              options={['Not Started', 'In Progress', 'Completed']}
              {...register('status')}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="due">Deadline</Label>
            <Input
              id="due"
              type="date"
              placeholder="Pick Date"
              {...register('due')}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 self-end">
        <Button type="button" variant="secondary" onClick={handleBack}>
          Cancel
        </Button>
        <Button type="submit" isLoading={formState.isSubmitting}>
          Save
        </Button>
      </div>
    </form>
  );
}
