import React, { useMemo } from "react";
import styled from "styled-components";
import Calendar from "../../components/Dashboard/Calendar";
import Todo from "../../components/Dashboard/Todo";
import { useTasks } from "../../context/TasksContext";

const Container = styled.div`
  padding: 32px;
  max-width: 1400px;
  margin: 0 auto;
`;

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.section`
  background: var(--neutral-50);
  overflow: hidden;
`;

const DashboardPage: React.FC = () => {
  const {
    tasks,
    handleTaskComplete,
    handleTaskAdd,
    handleTaskDelete,
    handleTasksReorder,
  } = useTasks();

  const activeTasks = useMemo(() => {
    return tasks.filter((task) => !task.finished_at);
  }, [tasks]);

  return (
    <Container>
      <TopGrid>
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
      </TopGrid>
    </Container>
  );
};

export default DashboardPage;
