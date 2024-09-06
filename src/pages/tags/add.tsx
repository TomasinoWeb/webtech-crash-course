import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import Button from '@/components/button';
import type { AddEditTagInputs } from '@/components/forms/add-edit-tag';
import AddEditTagForm from '@/components/forms/add-edit-tag';
import type { Tag, TagColors } from '@/const/tags';

import Layout from '../layouts/layout';

export default function AddTag() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm<AddEditTagInputs>({
    defaultValues: {
      name: '',
      description: '',
      color: undefined,
    },
  });

  const onSubmit: SubmitHandler<AddEditTagInputs> = async (data) => {
    const newTag: Tag = {
      id: Math.floor(Math.random() * 10000),
      name: data.name,
      description: data.description,
      color: data.color as TagColors,
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
      setLoading(false);
      router.push('/tags');
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col gap-10">
          <div className="text-2xl font-medium md:text-5xl">Add Task</div>
          <AddEditTagForm register={register} />
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
    </Layout>
  );
}
