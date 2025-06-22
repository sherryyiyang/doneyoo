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

interface CustomToolbarProps {
  label: string;
  view: View;
  views: View[];
  onNavigate: (action: "PREV" | "NEXT" | "TODAY" | "DATE", date?: Date) => void;
  onView: (view: View) => void;
  date: Date;
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
  const [date, setDate] = React.useState(new Date());

  const events = tasks
    .filter((task) => task.finished_at)
    .map((task) => {
      const duration = task.finished_at
        ? task.finished_at.getTime() - task.created_at.getTime()
        : 0;

      let className = "completed-medium";
      if (duration <= 3600000) {
        className = "completed-short"; // 1 hour
      } else if (duration <= 86400000) {
        className = "completed-long"; // 24 hours
      } else if (duration <= 604800000) {
        className = "completed-week"; // 7 days
      } else if (duration <= 2592000000) {
        className = "completed-month"; // 30 days
      } else if (duration <= 31536000000) {
        className = "completed-year"; // 1 year
      } else {
        className = "completed-long-term"; // more than 1   ear
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
    if (event.className) {
      switch (event.className) {
        case "completed-short":
          style = { ...baseStyle, backgroundColor: "var(--badge-color-1)" };
          break;
        case "completed-long":
          style = { ...baseStyle, backgroundColor: "var(--badge-color-2)" };
          break;
        case "completed-week":
          style = { ...baseStyle, backgroundColor: "var(--badge-color-3)" };
          break;
        case "completed-month":
          style = { ...baseStyle, backgroundColor: "var(--badge-color-4)" };
          break;
        case "completed-year":
          style = { ...baseStyle, backgroundColor: "var(--badge-color-5)" };
          break;
        case "completed-long-term":
          style = { ...baseStyle, backgroundColor: "var(--badge-color-6)" };
          break;
        default:
          style = { ...baseStyle, backgroundColor: "var(--dark-text)" };
          break;
      }
    }

    return {
      className: event.className,
      style,
    };
  };

  const handleViewChange = (newView: View) => {
    setView(newView);
  };

  const handleNavigate = (newDate: Date) => {
    setDate(newDate);
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
        date={date}
        onNavigate={handleNavigate}
        views={[Views.MONTH, Views.WEEK, Views.DAY]}
        defaultView={Views.MONTH}
        step={60}
        timeslots={1}
        min={new Date(0, 0, 0, 0, 0, 0)}
        max={new Date(0, 0, 0, 23, 59, 59)}
        components={{
          toolbar: (props) => <CustomToolbar {...props} />,
        }}
        dayLayoutAlgorithm="no-overlap"
      />
    </CalendarContainer>
  );
};

// Custom toolbar component to ensure view buttons work properly
const CustomToolbar = (toolbar: any) => {
  const goToBack = () => {
    toolbar.onNavigate("PREV");
  };

  const goToNext = () => {
    toolbar.onNavigate("NEXT");
  };

  const goToToday = () => {
    toolbar.onNavigate("TODAY");
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
