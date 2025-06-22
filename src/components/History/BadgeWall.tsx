import React, { useMemo } from "react";
import { useTasks } from "../../context/TasksContext";
import { Task } from "../../types/Task";

import badge1 from "../../assets/badge_1.webp";
import badge2 from "../../assets/badge_2.webp";
import badge3 from "../../assets/badge_3.webp";
import badge4 from "../../assets/badge_4.webp";
import badge5 from "../../assets/badge_5.webp";
import badge6 from "../../assets/badge_6.webp";
import badge7 from "../../assets/badge_7.webp";
import badge8 from "../../assets/badge_8.webp";
import badge9 from "../../assets/badge_9.webp";
import badge10 from "../../assets/badge_10.webp";
import badge11 from "../../assets/badge_11.webp";
import badge12 from "../../assets/badge_12.webp";

import {
  BadgeWallContainer,
  BadgeGrid,
  BadgeItem,
  BadgeImage,
  BadgeText,
  FinishedTasksTitle,
} from "./styles";

const badgeImages = [
  badge1,
  badge2,
  badge3,
  badge4,
  badge5,
  badge6,
  badge7,
  badge8,
  badge9,
  badge10,
  badge11,
  badge12,
];

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
