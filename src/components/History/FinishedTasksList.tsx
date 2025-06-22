import React, { useMemo } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { format, formatDistance } from "date-fns";
import { Task } from "../../types/Task";
import { useTasks } from "../../context/TasksContext";
import {
  FinishedTasksContainer,
  FinishedTasksTitle,
  StyledTable,
} from "./styles";
import { DurationBadge } from "../../components/Common/durationBadge";

const FinishedTasksList: React.FC = () => {
  const { tasks } = useTasks();

  const finishedTasks = useMemo(() => {
    return tasks.filter((task: Task) => !!task.finished_at);
  }, [tasks]);

  const formatDuration = (ms: number) => {
    return formatDistance(0, ms, { includeSeconds: true });
  };

  const columns: ColumnsType<Task> = [
    {
      title: "Task",
      dataIndex: "content",
      key: "content",
      sorter: (a, b) => a.content.localeCompare(b.content),
    },
    {
      title: "Start Time",
      dataIndex: "created_at",
      key: "created_at",
      render: (date: Date) => format(date, "MMM d, yyyy, h:mm a"),
      sorter: (a, b) => a.created_at.getTime() - b.created_at.getTime(),
      defaultSortOrder: "descend",
    },
    {
      title: "Finish Time",
      dataIndex: "finished_at",
      key: "finished_at",
      render: (date?: Date) =>
        date ? format(date, "MMM d, yyyy, h:mm a") : "-",
      sorter: (a, b) =>
        (a.finished_at?.getTime() || 0) - (b.finished_at?.getTime() || 0),
    },
    {
      title: "Duration",
      key: "duration",
      render: (_, record) => {
        if (!record.finished_at) return "-";
        const duration =
          record.finished_at.getTime() - record.created_at.getTime();
        return (
          <DurationBadge 
            duration={duration}
          />
        );
      },
      sorter: (a, b) => {
        const durationA = a.finished_at
          ? a.finished_at.getTime() - a.created_at.getTime()
          : 0;
        const durationB = b.finished_at
          ? b.finished_at.getTime() - b.created_at.getTime()
          : 0;
        return durationA - durationB;
      },
    },
  ];

  const TypedStyledTable = StyledTable as typeof Table<Task>;

  return (
    <FinishedTasksContainer>
      <FinishedTasksTitle>Finished Tasks History</FinishedTasksTitle>
      <TypedStyledTable
        columns={columns}
        dataSource={finishedTasks}
        rowKey="id"
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20", "50"],
        }}
      />
    </FinishedTasksContainer>
  );
};

export default FinishedTasksList;
