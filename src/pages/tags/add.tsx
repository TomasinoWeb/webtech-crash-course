import { useRouter } from 'next/navigation';
import type { SubmitHandler } from 'react-hook-form';

import type { AddEditTagInputs } from '@/components/forms/add-edit-tag';
import AddEditTagForm from '@/components/forms/add-edit-tag';
import type { TagColors } from '@/hooks/dto';

import Layout from '../layouts/layout';

type AddTagData = {
  name: string;
  description: string;
  color: TagColors;
};

export default function AddTag() {
  const router = useRouter();

  const onSubmit: SubmitHandler<AddEditTagInputs> = async (data) => {
    const newTag: AddTagData = {
      name: data.name,
      description: data.description,
      color: data.color as TagColors,
    };

    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      console.log(
        JSON.stringify(
          {
            status: 'success',
            message: 'Tag added successfully',
            tag: newTag,
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
        <div className="text-2xl font-medium md:text-5xl">Add Task</div>
        <AddEditTagForm onSubmit={onSubmit} />
      </div>
    </Layout>
  );
}
