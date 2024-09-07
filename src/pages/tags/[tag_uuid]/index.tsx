import { Pencil, Plus } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '@/components/button';
import Header from '@/components/dashboard/header';
import TaskLoader from '@/components/dashboard/task-loader';
import TasksSection from '@/components/dashboard/tasks-section';
import type { TagDTO } from '@/hooks/dto';
import { useTags } from '@/hooks/useTags';
import { useTasks } from '@/hooks/useTasks';
import Layout from '@/pages/layouts/layout';
import type { FilteredTasks } from '@/utils/filterTaskByDate';
import { filterTasksByDueDate } from '@/utils/filterTaskByDate';

interface DashboardTagListPageProps {
  tag: TagDTO;
  tasks: FilteredTasks;
}

function DashboardTagListPage({ tag, tasks }: DashboardTagListPageProps) {
  return (
    <div className="flex w-full flex-col gap-10">
      <Header
        title={tag.name}
        subtitle={tag.description}
        buttonSide={
          <>
            <Link href={`/tags/${tag.uuid}/edit`}>
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

      <TasksSection filteredTask={tasks} />
    </div>
  );
}

export default function DashboardTagTaskList() {
  const router = useRouter();
  const { tag_uuid } = router.query;
  const taskLoader = useTasks();
  const tagLoader = useTags();

  return (
    <Layout>
      {taskLoader.loading || tagLoader.loading ? (
        <TaskLoader />
      ) : (
        <DashboardTagListPage
          tag={tagLoader.tags.find((tag) => tag.uuid === tag_uuid)!}
          tasks={filterTasksByDueDate(
            taskLoader.tasks.filter((task) => task.tag_uuid === tag_uuid),
          )}
        />
      )}
    </Layout>
  );
}
