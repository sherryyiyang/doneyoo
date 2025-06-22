import React, { useMemo, useState } from "react";
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
  TimeText,
  BadgeImageWrapper,
  StyledModal,
  SubtextContainer,
} from "./styles";

import { format } from "date-fns";
import { DurationBadge } from "../../components/Common/durationBadge";

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
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const finishedTasks = useMemo(() => {
    return tasks.filter((task: Task) => !!task.finished_at);
  }, [tasks]);

  const handleBadgeClick = (task: Task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedTask(null);
  };

  const getBadgeImage = (index: number) =>
    badgeImages[index % badgeImages.length];

  const formatDuration = (ms: number) => {
    if (!ms) return "-";
    const seconds = Math.floor(ms / 1000) % 60;
    const minutes = Math.floor(ms / (1000 * 60)) % 60;
    const hours = Math.floor(ms / (1000 * 60 * 60)) % 24;
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    let str = "";
    if (days) str += `${days}d `;
    if (hours) str += `${hours}h `;
    if (minutes) str += `${minutes}m `;
    if (seconds) str += `${seconds}s`;
    return str.trim();
  };

  return (
    <BadgeWallContainer>
      <FinishedTasksTitle>Your Badge Wall</FinishedTasksTitle>
      <BadgeGrid>
        {finishedTasks.map((task, index) => (
          <BadgeItem
            key={task.id}
            style={{ cursor: "pointer" }}
            onClick={() => handleBadgeClick(task)}
          >
            <BadgeImageWrapper>
              <BadgeImage
                src={getBadgeImage(index)}
                alt={`Badge for ${task.content}`}
              />
              <TimeText>
                {/* @ts-ignore */}
                {format(task?.finished_at, "mm:dd:yyyy")}
              </TimeText>
            </BadgeImageWrapper>
            <BadgeText>{task.content}</BadgeText>
          </BadgeItem>
        ))}
      </BadgeGrid>
      <StyledModal
        open={modalOpen}
        onCancel={handleModalClose}
        footer={null}
        centered
      >
        {selectedTask && (
          <>
            <BadgeImageWrapper
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <BadgeImage
                src={getBadgeImage(finishedTasks.indexOf(selectedTask))}
                alt={`Badge for ${selectedTask.content}`}
              />
              <TimeText>
                {/* @ts-ignore */}
                {format(selectedTask?.finished_at, "mm:dd:yyyy")}
              </TimeText>
            </BadgeImageWrapper>
            <SubtextContainer>
              <BadgeText style={{ fontSize: 32, margin: "0" }}>
                {selectedTask.content}
              </BadgeText>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--neutral-600)",
                  marginBottom: 4,
                }}
              >
                <b>Created:</b>{" "}
                {format(selectedTask.created_at, "MMM d, yyyy, h:mm a")}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--neutral-600)",
                  marginBottom: 4,
                }}
              >
                <b>Finished:</b>{" "}
                {selectedTask.finished_at
                  ? format(selectedTask.finished_at, "MMM d, yyyy, h:mm a")
                  : "-"}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--neutral-600)",
                  marginBottom: 4,
                  display: "inline-flex",
                  flexDirection: "row",
                  gap: "8px",
                }}
              >
                <b>Duration:</b>
                <DurationBadge
                  duration={
                    selectedTask.finished_at
                      ? selectedTask.finished_at.getTime() -
                        selectedTask.created_at.getTime()
                      : 0
                  }
                />
              </div>
            </SubtextContainer>
          </>
        )}
      </StyledModal>
    </BadgeWallContainer>
  );
};

export default BadgeWall;
