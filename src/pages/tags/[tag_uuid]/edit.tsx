import { useRouter } from 'next/router';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import Button from '@/components/button';
import type { AddEditTagInputs } from '@/components/forms/add-edit-tag';
import AddEditTagForm from '@/components/forms/add-edit-tag';
import SpinnerPage from '@/components/Spinner';
import type { TagDTO } from '@/hooks/dto';
import { useTags } from '@/hooks/useTags';
import Layout from '@/pages/layouts/layout';

interface EditTagProps {
  tag: TagDTO;
}

function EditTag({ tag }: EditTagProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm<AddEditTagInputs>({
    defaultValues: {
      name: tag?.name ?? '',
      description: tag?.description ?? '',
      color: tag?.color ?? '',
    },
  });

  const onSubmit: SubmitHandler<AddEditTagInputs> = async (data) => {
    const newTag: TagDTO = {
      ...tag,
      name: data.name,
      description: data.description,
      color: data.color as TagDTO['color'],
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
            message: 'Tag edited successfully',
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
      router.push(`/tags/${newTag.uuid}`);
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
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
  );
}

export default function EditTagPage() {
  const router = useRouter();
  const { tag_uuid } = router.query;
  const tagLoader = useTags();

  return (
    <Layout>
      {tagLoader.loading ? (
        <SpinnerPage />
      ) : (
        <EditTag tag={tagLoader.fetchTag(tag_uuid as string)} />
      )}
    </Layout>
  );
}
