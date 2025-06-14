import React from "react";
import {
  Calendar as BigCalendar,
  dateFnsLocalizer,
  Views,
} from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Task } from "../../types/Task";
import { CalendarContainer } from "./styles";

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

const Calendar: React.FC<CalendarProps> = ({ tasks, onDateSelect }) => {
  const events = tasks
    .filter((task) => task.finished_at) // Only show completed tasks
    .map((task) => {
      const duration = task.finished_at!.getTime() - task.created_at.getTime();
      let className = "completed-medium";

      if (duration <= 3600000) {
        // 1 hour
        className = "completed-fast";
      } else if (duration > 86400000) {
        // 24 hours
        className = "completed-slow";
      }

      return {
        id: task.id,
        title: task.content,
        start: task.finished_at,
        end: task.finished_at,
        className,
      };
    });

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
        views={["month", "week", "day"]}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={({ start }) => onDateSelect?.(start)}
        selectable
        popup
        eventPropGetter={eventStyleGetter}
      />
    </CalendarContainer>
  );
};

export default Calendar;
