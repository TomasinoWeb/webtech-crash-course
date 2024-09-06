import type { TaskStatus } from '@/const/tasks';

import Badge from '../badge';

interface ProgressBadgeProps {
  status: TaskStatus;
}

export default function ProgressBadge({ status }: ProgressBadgeProps) {
  let progressColor: 'grey' | 'blue' | 'green';

  switch (status) {
    case 'Not Started':
      progressColor = 'grey';
      break;
    case 'In Progress':
      progressColor = 'blue';
      break;
    case 'Completed':
      progressColor = 'green';
      break;
    default:
      progressColor = 'grey';
  }

  return <Badge color={progressColor} text={status} dot />;
}
