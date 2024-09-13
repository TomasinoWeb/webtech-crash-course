import { useRouter } from 'next/navigation';
import type { SubmitHandler } from 'react-hook-form';

import type { AddEditTagInputs } from '@/components/forms/add-edit-tag';
import AddEditTagForm from '@/components/forms/add-edit-tag';
import type { TagColors } from '@/hooks/dto';
import { api } from '@/utils/client';

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
      await api.post('/tag', newTag);
      router.push('/tags');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <div className="flex w-full flex-col gap-10">
        <div className="text-2xl font-medium md:text-5xl">Add Tag</div>
        <AddEditTagForm onSubmit={onSubmit} />
      </div>
    </Layout>
  );
}
