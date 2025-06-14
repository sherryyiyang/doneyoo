import React from "react";
import {
  Calendar as BigCalendar,
  dateFnsLocalizer,
  Views,
  View,
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
  const [view, setView] = React.useState<View>("month");

  const events = tasks
    .filter((task) => task.finished_at)
    .map((task) => {
      const duration = task.finished_at
        ? task.finished_at.getTime() - task.created_at.getTime()
        : 0;

      let className = "completed-medium";
      if (task.finished_at) {
        if (duration <= 3600000) {
          // 1 hour
          className = "completed-fast";
        } else if (duration > 86400000) {
          // 24 hours
          className = "completed-slow";
        }
      }

      const startTime = task.finished_at || task.created_at;
      const endTime = new Date(startTime.getTime() + 60 * 60000); // Add 1 hour duration

      return {
        id: task.id,
        title: task.content,
        start: startTime,
        end: endTime,
        className,
        allDay: false,
      };
    });

  const eventStyleGetter = (event: any) => {
    const baseStyle = {
      backgroundColor: "var(--primary-500)",
      borderRadius: "4px",
      opacity: 1,
      color: "white",
      border: "none",
      display: "block",
    };

    let style = baseStyle;
    if (event.className === "completed-fast") {
      style = {
        ...baseStyle,
        backgroundColor: "var(--success-500)",
      };
    } else if (event.className === "completed-medium") {
      style = {
        ...baseStyle,
        backgroundColor: "var(--warning-500)",
      };
    } else if (event.className === "completed-slow") {
      style = {
        ...baseStyle,
        backgroundColor: "var(--error-500)",
      };
    }

    return {
      className: event.className,
      style,
    };
  };

  const handleViewChange = (newView: View) => {
    setView(newView);
  };

  return (
    <CalendarContainer>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={({ start }) => onDateSelect?.(start)}
        selectable
        popup
        eventPropGetter={eventStyleGetter}
        view={view}
        onView={handleViewChange}
        views={[Views.MONTH, Views.WEEK, Views.DAY]}
        defaultView={Views.MONTH}
        step={60}
        timeslots={1}
        min={new Date(0, 0, 0, 0, 0, 0)}
        max={new Date(0, 0, 0, 23, 59, 59)}
        components={{
          toolbar: CustomToolbar,
        }}
        dayLayoutAlgorithm="no-overlap"
      />
    </CalendarContainer>
  );
};

// Custom toolbar component to ensure view buttons work properly
const CustomToolbar = (toolbar: any) => {
  const goToToday = () => {
    toolbar.onNavigate("TODAY");
  };

  const goToBack = () => {
    toolbar.onNavigate("PREV");
  };

  const goToNext = () => {
    toolbar.onNavigate("NEXT");
  };

  const changeView = (view: View) => {
    toolbar.onView(view);
  };

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={goToBack}>
          Back
        </button>
        <button type="button" onClick={goToToday}>
          Today
        </button>
        <button type="button" onClick={goToNext}>
          Next
        </button>
      </span>
      <span className="rbc-toolbar-label">{toolbar.label}</span>
      <span className="rbc-btn-group">
        <button
          type="button"
          className={toolbar.view === "month" ? "rbc-active" : ""}
          onClick={() => changeView(Views.MONTH)}
        >
          Month
        </button>
        <button
          type="button"
          className={toolbar.view === "week" ? "rbc-active" : ""}
          onClick={() => changeView(Views.WEEK)}
        >
          Week
        </button>
        <button
          type="button"
          className={toolbar.view === "day" ? "rbc-active" : ""}
          onClick={() => changeView(Views.DAY)}
        >
          Day
        </button>
      </span>
    </div>
  );
};

export default Calendar;
