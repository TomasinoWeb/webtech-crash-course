import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';

import Button from '@/components/button';
import Header from '@/components/dashboard/header';
import TaskLoader from '@/components/dashboard/task-loader';
import TasksSection from '@/components/dashboard/tasks-section';
import { useTasks } from '@/hooks/useTasks';
import { filterTasksByDueDate } from '@/utils/filterTaskByDate';
import { formatDate } from '@/utils/formatDate';

import Layout, { UserContext } from './layouts/layout';

function NewHeader() {
  const today = formatDate(new Date());
  const user = useContext(UserContext);

  return (
    <Header
      title={`Good Morning, ${user?.username ?? 'Totoro'}`}
      subtitle={`Today, ${today}`}
      buttonSide={
        <Link href="/tasks/add" className="w-full md:w-fit">
          <Button className="h-fit w-full">
            <Plus /> Add Task
          </Button>
        </Link>
      }
    />
  );
}

export default function Home() {
  const { tasks, loading } = useTasks();
  const filteredTask = filterTasksByDueDate(tasks);

  return (
    <Layout>
      <div className="flex w-full flex-col gap-10">
        <NewHeader />

        {loading ? (
          <TaskLoader />
        ) : (
          <TasksSection filteredTask={filteredTask} />
        )}
      </div>
    </Layout>
  );
}
