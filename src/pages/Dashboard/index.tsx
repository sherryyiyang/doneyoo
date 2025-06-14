import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Calendar from "../../components/Dashboard/Calendar";
import Todo from "../../components/Dashboard/Todo";
import { Task } from "../../types/Task";

const Container = styled.div`
  padding: 32px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 48px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.section`
  background: var(--neutral-50);
  overflow: hidden;
`;

const DashboardPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      content: "Review project documentation",
      created_at: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      updated_at: new Date(),
      finished_at: new Date(),
      position: 0,
    },
    {
      id: "2",
      content: "Update dependencies",
      created_at: new Date(Date.now() - 24 * 60 * 60 * 1000), // 24 hours ago
      updated_at: new Date(),
      finished_at: new Date(),
      position: 1,
    },
    {
      id: "3",
      content: "Write unit tests",
      created_at: new Date(),
      updated_at: new Date(),
      position: 2,
    },
  ]);

  const handleTaskComplete = useCallback((taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              updated_at: new Date(),
              finished_at: task.finished_at ? undefined : new Date(),
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

  return (
    <Container>
      <Grid>
        <Section>
          <Calendar tasks={tasks} />
        </Section>
        <Section>
          <Todo
            tasks={tasks}
            onTaskComplete={handleTaskComplete}
            onTaskAdd={handleTaskAdd}
            onTaskDelete={handleTaskDelete}
            onTasksReorder={handleTasksReorder}
          />
        </Section>
      </Grid>
    </Container>
  );
};

export default DashboardPage;
