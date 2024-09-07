import { useRouter } from 'next/router';
import type { SubmitHandler } from 'react-hook-form';

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

  const onSubmit: SubmitHandler<AddEditTagInputs> = async (data) => {
    const newTag: TagDTO = {
      ...tag,
      name: data.name,
      description: data.description,
      color: data.color as TagDTO['color'],
    };

    try {
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
      router.push(`/tags/${newTag.uuid}`);
    }
  };

  return (
    <div className="flex w-full flex-col gap-10">
      <div className="text-2xl font-medium md:text-5xl">
        Edit Task {tag.name}
      </div>
      <AddEditTagForm tag={tag} onSubmit={onSubmit} />
    </div>
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
