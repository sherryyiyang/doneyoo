import exp from "constants";
import styled from "styled-components";
import { Table, Tag } from "antd";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: var(--neutral-50);
  padding: 24px;
`;

export const Header = styled.div`
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: var(--dark-text);
  margin-bottom: 8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
  padding: 16px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 0.5px solid var(--light-text);
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--neutral-200);
  border-radius: 6px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: var(--neutral-400);
  }
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 600px;
  overflow-y: auto;
  padding-right: 8px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--neutral-300);
    border-radius: 4px;
  }
`;

export const TaskItem = styled.div<{ isDragging: boolean, isCompleted: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: ${({ isCompleted }) =>
     isCompleted
      ? "rgba(255, 255, 255, 0.6)"
      : "white"};

  border-radius: 8px;
  border: ${({ isCompleted }) =>
     isCompleted
      ? "none"
      : "0.5px solid var(--light-text)"};
  box-shadow: ${({ isDragging }) =>
    isDragging
      ? "0 8px 16px rgba(0, 0, 0, 0.1)"
      : "white"};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid var(--purple-primary);
  cursor: pointer;
  appearance: none;
  background: white;
  transition: all 0.2s;
  color: white;

  &:checked {
    background: var(--purple-primary);
    color: white;

    &::after {
      content: "✓";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 12px;
    }
  }
`;

export const TaskContent = styled.div`
  flex: (1, 1, 0);
  gap: 8px;
  display: inline-flex;
`;

export const TaskText = styled.div<{ isCompleted: boolean }>`
  font-size: 16px;
  color: ${({ isCompleted }) =>
    isCompleted ? "var(--neutral-400)" : "var(--dark-text)"};
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "none"};
  > span {
    margin-left: 8px;
  }
`;


export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: var(--neutral-400);
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    color: var(--error-500);
    background: rgba(239, 68, 68, 0.1);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
  flex-wrap: wrap;
  margin-left: auto;
`

export const CalendarContainer = styled.div`
  height: 900px;
  padding: 20px;
  border: 0.5px solid var(--light-text);
  border-radius: 36px;

  .rbc-calendar {
    border-radius: 4px;
    padding: 20px;
  }

  .rbc-event {
    background: var(--dark-text);
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
  
  .rbc-month-header {
    border-radius: 12px;
    margin-bottom: 24px;
    border: 1px solid var(--dark-text);
    z-index: 3;
  }

  .rbc-header {
    padding: 8px;
    font-weight: 600;
    color: black;
    border: none;

  }

  .rbc-button-link {
    border: none;
    background: tan;
    color: white;
    border-radius: 12px;
    padding: 4px;
    margin: 0 4px;
    font-size: 12px;
    border: none;
    font-weight: 600;
  }

  .rbc-date-cell {
    margin-bottom: 12px;
    text-align: left;
  }

  .rbc-toolbar {
    margin-bottom: 20px;

    .rbc-toolbar-label {
      font-weight: 600;
      color: var(--dark-text);
      font-size: 18px;
    }


  }

  .rbc-toolbar button {
    color: var(--dark-text);
    border: 1px solid var(--neutral-400);
    border-radius: 8px;
    padding: 8px 12px;
    background: rgba(255, 255, 255, 0.9);
    transition: all 0.2s;

    &:hover {
        background: var(--dark-text);
        color: white;
    }

    &.rbc-active {
      background: var(--dark-text) !important;
      color: white;
      border-color: transparent;
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

  .rbc-month-row {
    min-height: 150px; /* increase as needed */
    max-height: 200px; /* increase as needed */
  }
`;

export const FinishedTasksContainer = styled.div`
  background: var(--bg-gradient-card);
  padding: 24px;
  margin-top: 32px;
`;

export const FinishedTasksTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: var(--dark-text);
  margin-bottom: 24px;
`;

export const StyledTable = styled(Table)`
  .ant-table {
    background: transparent;
  }

  .ant-table-thead > tr > th {
    background: white;
    font-weight: 600;
    color: var(--neutral-800);
    border-bottom: 2px solid var(--primary-500);
  }

  .ant-table-tbody > tr > td {
    border-bottom: 1px solid var(--neutral-200);
  }

  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: var(--neutral-100);
  }
`;

export const TodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 16px;
`;

export const TodoTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: var(--dark-text);
  margin: 0;
`;

export const HistoryLink = styled(Link)`
  font-size: 14px;
  color: var(--dark-text);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;