import Header from '@/components/dashboard/header';
import TasksSection from '@/components/dashboard/tasks-section';
import { useTask } from '@/hooks/useTask';
import { filterTasksByDueDate } from '@/utils/taskUtils';

import Layout from './layouts/layout';

export default function Home() {
  const { tasks, loading } = useTask();
  const filteredTask = filterTasksByDueDate(tasks);

  return (
    <Layout>
      <div className="flex w-full flex-col gap-10">
        <Header />
        <TasksSection filteredTask={filteredTask} loading={loading} />
      </div>
    </Layout>
  );
}
