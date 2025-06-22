import React, {
  createContext,
  useState,
  useCallback,
  ReactNode,
  useContext,
} from "react";
import { Task } from "../types/Task";

interface ITasksContext {
  tasks: Task[];
  handleTaskComplete: (taskId: string) => void;
  handleTaskAdd: (content: string) => void;
  handleTaskDelete: (taskId: string) => void;
  handleTasksReorder: (reorderedTasks: Task[]) => void;
}

const TasksContext = createContext<ITasksContext | undefined>(undefined);

const generateInitialTasks = (): Task[] => {
  return [
    {
      id: "0",
      content: "Complete the project report",
      created_at: new Date(Date.now() - 13 * 24 * 60 * 60 * 1000),
      updated_at: new Date(Date.now() - 13 * 24 * 60 * 60 * 1000),
      finished_at: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000),
      position: 0,
    },
    {
      id: "1",
      content: "Review project documentation",
      created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      updated_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      finished_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      position: 0,
    },
    {
      id: "2",
      content: "Update dependencies",
      created_at: new Date(Date.now() - 3 * 60 * 60 * 1000),
      updated_at: new Date(Date.now() - 3 * 60 * 60 * 1000),
      finished_at: new Date(Date.now() - 2 * 60 * 60 * 1000),
      position: 1,
    },
    {
      id: "3",
      content: "Update Resume",
      created_at: new Date(Date.now() - 50 * 24 * 60 * 60 * 1000),
      updated_at: new Date(Date.now() - 50 * 24 * 60 * 60 * 1000),
      finished_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      position: 1,
    },
    {
      id: "4",
      content: "Implement new feature",
      created_at: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
      updated_at: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
      finished_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      position: 1,
    },
    {
      id: "5",
      content: "Submit pull request",
      created_at: new Date(Date.now() - 50 * 24 * 60 * 60 * 1000),
      updated_at: new Date(Date.now() - 50 * 24 * 60 * 60 * 1000),
      finished_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
      position: 1,
    },
    {
      id: "6",
      content: "Write unit tests for the new feature",
      created_at: new Date(),
      updated_at: new Date(),
      position: 2,
    },
    {
      id: "7",
      content: "Deploy to staging environment",
      created_at: new Date(Date.now() - 30 * 60 * 1000),
      updated_at: new Date(),
      position: 3,
    },
    {
      id: "8",
      content: "Draft the Q3 roadmap",
      created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      updated_at: new Date(),
      position: 4,
    },
  ];
};

export const TasksProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>(generateInitialTasks());

  const handleTaskComplete = useCallback((taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              updated_at: new Date(),
              finished_at: new Date(),
            }
          : task
      )
    );
  }, []);

  const handleTaskAdd = useCallback(
    (content: string) => {
      const newTask: Task = {
        id: Date.now().toString(),
        content,
        created_at: new Date(),
        updated_at: new Date(),
        position: tasks.length,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    },
    [tasks.length]
  );

  const handleTaskDelete = useCallback((taskId: string) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks
        .filter((task) => task.id !== taskId)
        .map((task, index) => ({
          ...task,
          position: index,
        }));
      return updatedTasks;
    });
  }, []);

  const handleTasksReorder = useCallback((reorderedTasks: Task[]) => {
    setTasks(reorderedTasks);
  }, []);

  const value = {
    tasks,
    handleTaskComplete,
    handleTaskAdd,
    handleTaskDelete,
    handleTasksReorder,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export const useTasks = (): ITasksContext => {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};
