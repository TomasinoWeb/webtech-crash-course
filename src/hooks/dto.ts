export type TaskStatus = 'not_yet_started' | 'in_progress' | 'completed';
export interface TaskDTO {
  uuid: string;
  name: string;
  description: string;
  status: TaskStatus;
  due_date: number; // unix time
  user_uuid: string;
  tag_uuid: string;
}

export type TagColors = 'yellow' | 'pink' | 'lime' | 'cyan' | 'purple';
export interface TagDTO {
  uuid: string;
  name: string;
  description: string;
  color: TagColors;
  user_uuid: string;
}

export interface UserDTO {
  uuid: string;
  username: string;
}
