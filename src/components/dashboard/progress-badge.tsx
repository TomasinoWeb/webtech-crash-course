import type { TaskStatus } from '@/hooks/dto';

import Badge from '../badge';

interface ProgressBadgeProps {
  status: TaskStatus;
}

export default function ProgressBadge({ status }: ProgressBadgeProps) {
  let progressColor: 'grey' | 'blue' | 'green';

  switch (status) {
    case 'not_yet_started':
      progressColor = 'grey';
      break;
    case 'in_progress':
      progressColor = 'blue';
      break;
    case 'completed':
      progressColor = 'green';
      break;
    default:
      progressColor = 'grey';
  }

  return <Badge color={progressColor} text={status} dot />;
}
