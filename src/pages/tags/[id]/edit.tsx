import { useRouter } from 'next/navigation';
import type { SubmitHandler } from 'react-hook-form';

import type { AddEditTagInputs } from '@/components/forms/add-edit-tag';
import AddEditTagForm from '@/components/forms/add-edit-tag';
import type { Tag, TagColors } from '@/const/tags';
import { fetchTag } from '@/lib/tagService';
import Layout from '@/pages/layouts/layout';

interface EditTagProps {
  tag: Tag;
}

export default function EditTag({ tag }: EditTagProps) {
  const router = useRouter();

  const onSubmit: SubmitHandler<AddEditTagInputs> = async (data) => {
    const newTag: Tag = {
      ...tag,
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
      router.back();
    }
  };

  return (
    <Layout>
      <div className="flex w-full flex-col gap-10">
        <div className="text-2xl font-medium md:text-5xl">
          Edit Task #{tag.id}
        </div>
        <AddEditTagForm tag={tag} onSubmit={onSubmit} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  const tag = await fetchTag(Number(params.id));

  if (tag === null) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      tag,
    },
  };
}
