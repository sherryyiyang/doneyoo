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

export const TaskPriorityColors = {
  low: 'var(--secondary-400)',
  medium: 'var(--primary-500)',
  high: 'var(--error-500)',
}; 