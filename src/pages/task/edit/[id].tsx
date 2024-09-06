import { useRouter } from 'next/router';

import Button from '@/components/button';
import AddEditTaskForm from '@/components/forms/add-edit-task';
import type { Tag } from '@/const/tags';
import type { Task } from '@/const/tasks';
import { fetchTags } from '@/lib/tagService';
import { fetchTask } from '@/lib/tasksService';
import Layout from '@/pages/layouts/layout';

interface EditTaskProps {
  task: Task | undefined;
  tags: Tag[];
}

export default function EditTask({ task, tags }: EditTaskProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Layout>
      <div className="flex w-full flex-col gap-10">
        <div className="text-2xl font-medium md:text-5xl">
          Edit Task #{task?.id}
        </div>
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

export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  const task = await fetchTask(Number(params.id));
  const tags = await fetchTags();
  return {
    props: {
      task,
      tags,
    },
  };
}
