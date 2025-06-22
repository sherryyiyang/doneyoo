import React, { useMemo } from "react";
import { useTasks } from "../../context/TasksContext";
import { Task } from "../../types/Task";

import badge1 from "../../assets/badge1.png";
import badge2 from "../../assets/badge2.png";
import badge3 from "../../assets/badge3.png";
import badge4 from "../../assets/badge.png";

import {
  BadgeWallContainer,
  BadgeGrid,
  BadgeItem,
  BadgeImage,
  BadgeText,
  FinishedTasksTitle,
} from "./styles";

const badgeImages = [badge1, badge2, badge3, badge4];

const BadgeWall: React.FC = () => {
  const { tasks } = useTasks();

  const finishedTasks = useMemo(() => {
    return tasks.filter((task: Task) => !!task.finished_at);
  }, [tasks]);

  return (
    <BadgeWallContainer>
      <FinishedTasksTitle>Your Badge Wall</FinishedTasksTitle>
      <BadgeGrid>
        {finishedTasks.map((task, index) => (
          <BadgeItem key={task.id}>
            <BadgeImage
              src={badgeImages[index % badgeImages.length]}
              alt={`Badge for ${task.content}`}
            />
            <BadgeText>{task.content}</BadgeText>
          </BadgeItem>
        ))}
      </BadgeGrid>
    </BadgeWallContainer>
  );
};

export default BadgeWall;
