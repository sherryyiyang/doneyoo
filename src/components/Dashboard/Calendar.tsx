import React from "react";
import {
  Calendar as BigCalendar,
  dateFnsLocalizer,
  Views,
} from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styled from "styled-components";

interface Task {
  id: string;
  title: string;
  date: Date;
  completed: boolean;
  color?: string;
}

interface CalendarProps {
  tasks: Task[];
  onDateSelect?: (date: Date) => void;
}

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarContainer = styled.div`
  height: 700px;
  padding: 20px;

  .rbc-calendar {
    background: var(--bg-gradient-card);
    border-radius: 12px;
    padding: 20px;
  }

  .rbc-event {
    background: var(--gradient-primary);
    border-radius: 4px;
    border: none;

    &.completed {
      background: var(--gradient-tertiary);
      opacity: 0.9;
    }
  }

  .rbc-today {
    background: linear-gradient(
      135deg,
      rgba(113, 97, 239, 0.1) 0%,
      rgba(149, 127, 239, 0.1) 100%
    );
  }

  .rbc-header {
    padding: 8px;
    font-weight: 600;
    color: var(--purple-primary);
    border-bottom: 1px solid rgba(113, 97, 239, 0.2);
  }

  .rbc-toolbar {
    margin-bottom: 20px;

    .rbc-toolbar-label {
      font-weight: 600;
      color: var(--purple-primary);
      font-size: 18px;
    }
  }

  .rbc-toolbar button {
    color: var(--purple-primary);
    border: 1px solid var(--purple-light);
    border-radius: 8px;
    padding: 8px 12px;
    background: rgba(255, 255, 255, 0.9);
    transition: all 0.2s;

    &:hover {
      background: linear-gradient(
        135deg,
        rgba(113, 97, 239, 0.1) 0%,
        rgba(149, 127, 239, 0.1) 100%
      );
      border-color: var(--purple-secondary);
    }

    &.rbc-active {
      background: var(--gradient-primary) !important;
      color: white;
      border-color: transparent;
      box-shadow: var(--shadow-colored);
    }
  }

  .rbc-off-range-bg {
    background: rgba(239, 217, 206, 0.2);
  }

  .rbc-day-bg + .rbc-day-bg,
  .rbc-header + .rbc-header {
    border-left: 1px solid rgba(113, 97, 239, 0.1);
  }

  .rbc-month-row + .rbc-month-row {
    border-top: 1px solid rgba(113, 97, 239, 0.1);
  }

  .rbc-timeslot-group {
    border-bottom: 1px solid rgba(113, 97, 239, 0.1);
  }

  .rbc-time-content {
    border-top: 1px solid rgba(113, 97, 239, 0.2);
  }

  .rbc-time-header-content {
    border-left: 1px solid rgba(113, 97, 239, 0.2);
  }

  .rbc-time-view {
    border: 1px solid rgba(113, 97, 239, 0.2);
    border-radius: 8px;
    overflow: hidden;
  }

  .rbc-time-header.rbc-overflowing {
    border-right: 1px solid rgba(113, 97, 239, 0.2);
  }

  .rbc-day-slot .rbc-time-slot {
    border-top: 1px solid rgba(113, 97, 239, 0.05);
  }
`;

const Calendar: React.FC<CalendarProps> = ({ tasks, onDateSelect }) => {
  const events = tasks.map((task) => ({
    id: task.id,
    title: task.title,
    start: task.date,
    end: new Date(task.date.getTime() + 60 * 60 * 1000), // 1 hour duration
    completed: task.completed,
    color: task.color,
  }));

  const eventStyleGetter = (event: any) => {
    return {
      className: event.completed ? "completed" : "",
      style: {
        backgroundColor: event.color || "var(--primary-500)",
      },
    };
  };

  return (
    <CalendarContainer>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={[Views.MONTH, Views.WEEK, Views.DAY]}
        defaultView={Views.MONTH}
        onSelectSlot={({ start }) => onDateSelect?.(start)}
        selectable
        popup
        eventPropGetter={eventStyleGetter}
      />
    </CalendarContainer>
  );
};

export default Calendar;
