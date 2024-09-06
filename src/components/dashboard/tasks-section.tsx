import type { FilteredTasks } from '@/utils/taskUtils';

import TaskList from './task-list';
import TaskLoader from './task-loader';

interface TasksSectionProps {
  filteredTask: FilteredTasks;
  loading: boolean;
}

export default function TasksSection({
  filteredTask,
  loading,
}: TasksSectionProps) {
  if (loading) {
    return <TaskLoader />;
  }

  return (
    <div className="flex flex-col gap-9">
      <TaskList title="Overdue" tasks={filteredTask.overdue} />
      <TaskList title="Today" tasks={filteredTask.today} />
      <TaskList title="Tomorrow" tasks={filteredTask.tomorrow} />
      <TaskList title="Upcoming" tasks={filteredTask.upcoming} />
      <TaskList title="No Due Date" tasks={filteredTask.noDueDate} />
    </div>
  );
}
