export interface Task {
  id: string;
  content: string;
  created_at: Date;
  updated_at: Date;
  finished_at?: Date;
  position: number; // For drag and drop ordering
}

export interface TaskFormData {
  content: string;
}