import type { UseFormRegister } from 'react-hook-form';

import Input from '@/components/input';
import Label from '@/components/label';
import Select from '@/components/select';
import type { TagDTO, TaskStatus } from '@/hooks/dto';

import TextArea from '../text-area';

export interface AddEditTaskInputs {
  name: string;
  description: string;
  status: TaskStatus;
  due_date: number;
  tag_uuid: string;
}

export interface AddEditTaskFormInput {
  name: string;
  description: string;
  tag_uuid: string;
  status: string;
  due_date: string;
}

interface AddEditTaskFormProps {
  tags: TagDTO[];
  register: UseFormRegister<AddEditTaskFormInput>;
}

export default function AddEditTaskForm({
  tags,
  register,
}: AddEditTaskFormProps) {
  return (
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
            options={tags.map((tag) => ({ key: tag.uuid, value: tag.name }))}
            {...register('tag_uuid')}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="status">Status</Label>
          <Select
            id="status"
            placeholder="Select Status"
            options={[
              { key: 'not_yet_started', value: 'Not started' },
              { key: 'in_progress', value: 'In Progress' },
              { key: 'compelted', value: 'Completed' },
            ]}
            {...register('status')}
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
  );
}
