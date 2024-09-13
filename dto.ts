export interface UserDTO {
  uuid: string;
  username: string;
}

export interface TagDTO {
  uuid: string;
  name: string;
  description: string;
  color: "yellow" | "pink" | "lime" | "cyan" | "purple";
  user_uuid: string;
}

export interface TaskDTO {
  uuid: string;
  name: string;
  description: string;
  status: "not_yet_started" | "in_progress" | "completed";
  due_date: number; // unix time
  user_uuid: string;
  tag_uuid: string;
}
