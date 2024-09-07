import type { FilteredTasks } from '@/utils/filterTaskByDate';

import TaskList from './task-list';

interface TasksSectionProps {
  filteredTask: FilteredTasks;
}

export default function TasksSection({ filteredTask }: TasksSectionProps) {
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
