import type { UseFormRegister } from 'react-hook-form';

import Input from '@/components/input';
import Label from '@/components/label';
import Select from '@/components/select';
import type { TagColors } from '@/hooks/dto';

import TextArea from '../text-area';

export interface AddEditTagInputs {
  name: string;
  description: string;
  color: TagColors;
}

interface AddEditTagFormProps {
  register: UseFormRegister<AddEditTagInputs>;
}

export default function AddEditTagForm({ register }: AddEditTagFormProps) {
  const colorOptions: { key: TagColors; value: string }[] = [
    { key: 'yellow', value: 'Yellow' },
    { key: 'pink', value: 'Pink' },
    { key: 'lime', value: 'Lime' },
    { key: 'cyan', value: 'Cyan' },
    { key: 'purple', value: 'Purple' },
  ];

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
            placeholder="Select Color"
            options={colorOptions}
            {...register('color')}
          />
        </div>
      </div>
    </div>
  );
}
