import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "./Calendar";
import Todo from "./Todo";

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const DashboardHeader = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 32px;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <DashboardContainer>
      <DashboardHeader>Dashboard</DashboardHeader>
      <DashboardGrid>
        <Calendar tasks={tasks} />
        <Todo
          tasks={tasks}
          onTaskComplete={() => {}}
          onTaskAdd={() => {}}
          onTaskDelete={() => {}}
          onTasksReorder={() => {}}
        />
      </DashboardGrid>
    </DashboardContainer>
  );
};

export default Dashboard;
