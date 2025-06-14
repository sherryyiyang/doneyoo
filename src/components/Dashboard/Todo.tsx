import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Common/Button";
import Input from "../Common/Input";
import { Task, TaskFormData } from "../../types/Task";

interface TodoProps {
  tasks: Task[];
  onTaskComplete: (taskId: string) => void;
  onTaskAdd: (title: string, date: Date) => void;
  onTaskDelete: (taskId: string) => void;
  onTaskUpdate: (taskId: string, updates: Partial<TaskFormData>) => void;
}

const Container = styled.div`
  padding: 24px;
  background: var(--bg-gradient-card);
`;

const Header = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
`;

const Form = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  border: 1px solid transparent;
  background-clip: padding-box;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: var(--border-gradient-light);
  }
`;

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 600px;
  overflow-y: auto;
  padding-right: 8px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(183, 156, 237, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gradient-tertiary);
    border-radius: 4px;
  }
`;

const TaskItem = styled.div<{ completed: boolean; isEditing: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: ${({ isEditing }) =>
    isEditing ? "rgba(113, 97, 239, 0.1)" : "rgba(255, 255, 255, 0.7)"};
  border-radius: 8px;
  transition: all 0.2s;
  border: 1px solid transparent;
  background-clip: padding-box;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: ${({ completed }) =>
      completed ? "var(--gradient-tertiary)" : "var(--border-gradient-light)"};
  }

  &:hover {
    background: ${({ isEditing }) =>
      isEditing ? "rgba(113, 97, 239, 0.15)" : "rgba(255, 255, 255, 0.9)"};
    transform: translateY(-1px);
    box-shadow: var(--shadow-colored);
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid var(--purple-primary);
  cursor: pointer;
  position: relative;
  appearance: none;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.2s;

  &:checked {
    background: var(--gradient-primary);
    border-color: transparent;

    &::after {
      content: "✓";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 12px;
    }
  }

  &:hover {
    border-color: var(--purple-secondary);
    box-shadow: 0 0 0 2px var(--purple-light);
  }
`;

const TaskContent = styled.div`
  flex: 1;
`;

const TaskTitle = styled.div<{ completed: boolean }>`
  font-size: 16px;
  color: ${({ completed }) =>
    completed ? "var(--purple-tertiary)" : "var(--purple-primary)"};
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  transition: color 0.2s;
`;

const TaskDescription = styled.div`
  font-size: 14px;
  color: var(--purple-tertiary);
  margin-top: 4px;
`;

const TaskDate = styled.div`
  font-size: 14px;
  color: var(--purple-secondary);
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TaskPriority = styled.span<{ priority: string }>`
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 12px;
  background: ${({ priority }) => {
    switch (priority) {
      case "high":
        return "linear-gradient(135deg, #ef4444 0%, #f87171 100%)";
      case "medium":
        return "var(--gradient-primary)";
      case "low":
        return "var(--gradient-tertiary)";
      default:
        return "var(--gradient-light)";
    }
  }};
  color: white;
  text-transform: capitalize;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: var(--purple-tertiary);
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--purple-primary);
    background: rgba(113, 97, 239, 0.1);
  }

  &.delete:hover {
    color: #ef4444;
    background: rgba(239, 68, 68, 0.1);
  }
`;

const EditForm = styled.form`
  display: flex;
  gap: 8px;
  flex: 1;
`;

interface EditingTask extends Task {
  newTitle: string;
  newDate: string;
  newDescription?: string;
  newPriority?: "low" | "medium" | "high";
}

const Todo: React.FC<TodoProps> = ({
  tasks,
  onTaskComplete,
  onTaskAdd,
  onTaskDelete,
  onTaskUpdate,
}) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDate, setNewTaskDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [editingTask, setEditingTask] = useState<EditingTask | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskTitle.trim()) {
      onTaskAdd(newTaskTitle, new Date(newTaskDate));
      setNewTaskTitle("");
    }
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTask && editingTask.newTitle.trim()) {
      onTaskUpdate(editingTask.id, {
        title: editingTask.newTitle,
        date: new Date(editingTask.newDate),
        description: editingTask.newDescription,
        priority: editingTask.newPriority,
      });
      setEditingTask(null);
    }
  };

  const startEditing = (task: Task) => {
    setEditingTask({
      ...task,
      newTitle: task.title,
      newDate: task.date.toISOString().split("T")[0],
      newDescription: task.description,
      newPriority: task.priority,
    });
  };

  return (
    <Container>
      <Header>
        <Title>Tasks</Title>
      </Header>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Add a new task"
          fullWidth
        />
        <Input
          type="date"
          value={newTaskDate}
          onChange={(e) => setNewTaskDate(e.target.value)}
        />
        <Button type="submit" variant="primary" size="small">
          Add
        </Button>
      </Form>

      <TaskList>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            completed={task.completed}
            isEditing={editingTask?.id === task.id}
          >
            {editingTask?.id === task.id ? (
              <EditForm onSubmit={handleEditSubmit}>
                <Input
                  type="text"
                  value={editingTask.newTitle}
                  onChange={(e) =>
                    setEditingTask({
                      ...editingTask,
                      newTitle: e.target.value,
                    })
                  }
                  fullWidth
                />
                <Input
                  type="date"
                  value={editingTask.newDate}
                  onChange={(e) =>
                    setEditingTask({
                      ...editingTask,
                      newDate: e.target.value,
                    })
                  }
                />
                <Input
                  type="text"
                  value={editingTask.newDescription || ""}
                  onChange={(e) =>
                    setEditingTask({
                      ...editingTask,
                      newDescription: e.target.value,
                    })
                  }
                  placeholder="Description"
                />
                <select
                  value={editingTask.newPriority || "medium"}
                  onChange={(e) =>
                    setEditingTask({
                      ...editingTask,
                      newPriority: e.target.value as "low" | "medium" | "high",
                    })
                  }
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <Button type="submit" variant="primary" size="small">
                  Save
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="small"
                  onClick={() => setEditingTask(null)}
                >
                  Cancel
                </Button>
              </EditForm>
            ) : (
              <>
                <Checkbox
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onTaskComplete(task.id)}
                />
                <TaskContent>
                  <TaskTitle completed={task.completed}>{task.title}</TaskTitle>
                  {task.description && (
                    <TaskDescription>{task.description}</TaskDescription>
                  )}
                  <TaskDate>
                    {task.date.toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                    {task.priority && (
                      <TaskPriority priority={task.priority}>
                        {task.priority}
                      </TaskPriority>
                    )}
                  </TaskDate>
                </TaskContent>
                <ButtonGroup>
                  <IconButton onClick={() => startEditing(task)}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 2.5L13.5 4.5M12.5 1.5L8 6L7 9L10 8L14.5 3.5C14.5 3.5 12.5 1.5 12.5 1.5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </IconButton>
                  <IconButton
                    className="delete"
                    onClick={() => onTaskDelete(task.id)}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 4L4 12M4 4L12 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </IconButton>
                </ButtonGroup>
              </>
            )}
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

export default Todo;
