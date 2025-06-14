export interface Task {
  id: string;
  title: string;
  description?: string;
  date: Date;
  completed: boolean;
  color?: string;
  priority?: 'low' | 'medium' | 'high';
  created_at: Date;
  updated_at: Date;
  finished_at?: Date;
  category?: string;
  tags?: string[];
  reminder?: boolean;
  repeat?: 'daily' | 'weekly' | 'monthly' | 'yearly' | null;
}

export type TaskFormData = Omit<Task, 'id' | 'created_at' | 'updated_at' | 'finished_at'>;

export const TaskPriorityColors = {
  low: 'var(--secondary-400)',
  medium: 'var(--primary-500)',
  high: 'var(--error-500)',
}; 