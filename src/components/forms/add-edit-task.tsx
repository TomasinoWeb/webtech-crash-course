import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import Input from '@/components/input';
import Label from '@/components/label';
import Select from '@/components/select';
import type { TagDTO, TaskDTO, TaskStatus } from '@/hooks/dto';

import Button from '../button';
import TextArea from '../text-area';

export interface AddEditTaskInputs {
  name: string;
  description: string;
  status: TaskStatus;
  due_date: number | string;
  tag_uuid: string;
}

interface AddEditTaskFormProps {
  task?: TaskDTO;
  tags: TagDTO[];
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
      tag_uuid: task?.tag_uuid ?? '',
      status: task?.status ?? undefined,
      due_date: task?.due_date
        ? new Date(task.due_date).toISOString().split('T')[0]
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
            <Label htmlFor="name" required>
              Task Name
            </Label>
            <Input
              id="name"
              placeholder="Task Name"
              {...register('name', { required: true })}
            />
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
            <Label htmlFor="tag" required>
              Tag
            </Label>
            <Select
              id="tag"
              placeholder="Select Tag"
              options={tags.map((tag) => ({ key: tag.uuid, value: tag.name }))}
              {...register('tag_uuid', { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="status" required>
              Status
            </Label>
            <Select
              id="status"
              placeholder="Select Status"
              options={[
                { key: 'not_yet_started', value: 'Not started' },
                { key: 'in_progress', value: 'In Progress' },
                { key: 'completed', value: 'Completed' },
              ]}
              {...register('status', { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="due">Deadline</Label>
            <Input
              id="due"
              type="date"
              placeholder="Pick Date"
              {...register('due_date')}
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
