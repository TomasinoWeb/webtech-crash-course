import dayjs from 'dayjs';
import { Plus } from 'lucide-react';

import Button from './components/button';
import TaskCard from './components/dashboard/task-card';
import Layout from './layouts/layout';

export default function Home() {
  const formattedDate = dayjs().format('ddd D MMM YYYY');

  return (
    <Layout>
      <div className="flex flex-col gap-10">
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-2">
            <div className="text-5xl font-medium">Good Morning, Totoro</div>
            <div className="text-3xl">Today, {formattedDate}</div>
          </div>
          <Button className="h-fit">
            <Plus /> Add Task
          </Button>
        </div>

        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-5 bg-slate-200 p-6">
            <div className="flex items-center gap-2">
              <div className="font-semibold uppercase">Overdue</div>
              <div className="bg-slate-300 px-1.5 text-center text-sm font-semibold">
                2
              </div>
            </div>
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </div>
        </div>
      </div>
    </Layout>
  );
}
