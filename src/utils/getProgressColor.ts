import type { TaskStatus } from '@/hooks/dto';

export function getProgressColor(status: TaskStatus) {
  switch (status) {
    case 'not_yet_started':
      return 'grey';
    case 'in_progress':
      return 'blue';
    case 'completed':
      return 'green';
    default:
      return 'grey';
  }
}
