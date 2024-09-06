import { Pencil, Plus } from 'lucide-react';
import Link from 'next/link';

import Button from '@/components/button';
import Header from '@/components/dashboard/header';
import TasksSection from '@/components/dashboard/tasks-section';
import type { Tag } from '@/const/tags';
import { useTask } from '@/hooks/useTask';
import { fetchTag } from '@/lib/tagService';
import Layout from '@/pages/layouts/layout';
import { filterTasksByDueDate } from '@/utils/filterTaskByDate';

interface DashboardTagTasksProps {
  tag: Tag;
}

export default function DashboardTagTaskList({ tag }: DashboardTagTasksProps) {
  const { tasks, loading } = useTask();
  const filteredTask = filterTasksByDueDate(tasks);

  return (
    <Layout>
      <div className="flex w-full flex-col gap-10">
        <Header
          title={tag.name}
          subtitle={tag.description}
          buttonSide={
            <>
              <Link href={`/tags/${tag.id}/edit`}>
                <Button variant="secondary" className="h-fit w-full">
                  <Pencil /> Edit Tag
                </Button>
              </Link>
              <Link href="/tasks/add">
                <Button className="h-fit w-full">
                  <Plus /> Add Task
                </Button>
              </Link>
            </>
          }
        />
        <TasksSection filteredTask={filteredTask} loading={loading} />
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

  if (!tag) {
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
