import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import Input from '@/components/input';
import Label from '@/components/label';
import Select from '@/components/select';
import type { TagColors, TagDTO } from '@/hooks/dto';

import Button from '../button';
import TextArea from '../text-area';

export interface AddEditTagInputs {
  name: string;
  description: string;
  color: TagColors;
}

interface AddEditTagFormProps {
  tag?: TagDTO;
  onSubmit: (data: AddEditTagInputs) => void;
}

export default function AddEditTagForm({ tag, onSubmit }: AddEditTagFormProps) {
  const { register, handleSubmit, formState } = useForm<AddEditTagInputs>({
    defaultValues: {
      name: tag?.name ?? '',
      description: tag?.description ?? '',
      color: tag?.color ?? undefined,
    },
  });
  const router = useRouter();

  const colorOptions: { key: TagColors; value: string }[] = [
    { key: 'yellow', value: 'Yellow' },
    { key: 'pink', value: 'Pink' },
    { key: 'lime', value: 'Lime' },
    { key: 'cyan', value: 'Cyan' },
    { key: 'purple', value: 'Purple' },
  ];

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
              placeholder="Select Color"
              options={colorOptions}
              {...register('color')}
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
