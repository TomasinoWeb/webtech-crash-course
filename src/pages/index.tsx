import Header from '@/components/dashboard/header';
import TasksSection from '@/components/dashboard/tasks-section';
import { useTask } from '@/hooks/useTask';
import { filterTasksByDueDate } from '@/utils/filterTaskByDate';
import { formatDate } from '@/utils/formatDate';

import Layout from './layouts/layout';

export default function Home() {
  const { tasks, loading } = useTask();
  const filteredTask = filterTasksByDueDate(tasks);
  const today = formatDate(new Date());

  return (
    <Layout>
      <div className="flex w-full flex-col gap-10">
        <Header
          title="Good Morning, Totoro"
          subtitle={`Today, ${today}`}
          href="/task/add"
          buttonText="Add Task"
        />
        <TasksSection filteredTask={filteredTask} loading={loading} />
      </div>
    </Layout>
  );
}
