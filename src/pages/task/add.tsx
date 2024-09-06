import { useRouter } from 'next/navigation';

import Button from '@/components/button';
import AddEditTaskForm from '@/components/forms/add-edit-task';
import type { Tag } from '@/const/tags';
import { fetchTags } from '@/lib/tagService';

import Layout from '../layouts/layout';

interface AddTaskProps {
  tags: Tag[];
}

export default function AddTask({ tags }: AddTaskProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Layout>
      <div className="flex w-full flex-col gap-10">
        <div className="text-2xl font-medium md:text-5xl">Add Task</div>
        <AddEditTaskForm tags={tags} />
        <div className="flex gap-4 self-end">
          <Button variant="secondary" onClick={handleBack}>
            Cancel
          </Button>
          <Button>Save</Button>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const tags = await fetchTags();

  return {
    props: {
      tags,
    },
  };
};
