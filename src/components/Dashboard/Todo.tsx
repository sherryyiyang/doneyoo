import React, { useState, useMemo } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DroppableProvided,
  DraggableProvided,
  DraggableStateSnapshot,
  DropResult,
} from "@hello-pangea/dnd";
import { Task } from "../../types/Task";
import {
  Container,
  Form,
  TaskList,
  TaskItem,
  TaskContent,
  TaskText,
  DeleteButton,
  ButtonContainer,
  TodoHeader,
  TodoTitle,
  HistoryLink,
} from "./styles";
import { Input, Checkbox } from "antd";
import Button from "../../components/Common/Button";
import { DurationBadge } from "../../components/Common/durationBadge";

interface TodoProps {
  tasks: Task[];
  onTaskComplete: (taskId: string) => void;
  onTaskAdd: (content: string) => void;
  onTaskDelete: (taskId: string) => void;
  onTasksReorder: (tasks: Task[]) => void;
}

const Todo: React.FC<TodoProps> = ({
  tasks,
  onTaskComplete,
  onTaskAdd,
  onTaskDelete,
  onTasksReorder,
}) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const { TextArea } = Input;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskContent.trim()) {
      onTaskAdd(newTaskContent);
      setNewTaskContent("");
    }
  };

  const onClear = (e: React.FormEvent) => {
    e.preventDefault();
    setNewTaskContent("");
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Update positions
    const updatedItems = items.map((task, index) => ({
      ...task,
      position: index,
    }));

    onTasksReorder(updatedItems);
  };

  return (
    <Container>
      <TodoHeader>
        <TodoTitle>To-do List</TodoTitle>
        <HistoryLink to="/history">View History →</HistoryLink>
      </TodoHeader>
      <Form onSubmit={handleSubmit}>
        <TextArea
          value={newTaskContent}
          onChange={(e: any) => setNewTaskContent(e.target.value)}
          placeholder="Add a new task..."
          rows={3}
        />
        <ButtonContainer>
          <Button variant="outline" size="small" onClick={onClear}>
            clear
          </Button>
          <Button variant="primary" size="small" onClick={handleSubmit}>
            Add Task
          </Button>
        </ButtonContainer>
      </Form>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks">
          {(provided: DroppableProvided) => (
            <TaskList {...provided.droppableProps} ref={provided.innerRef}>
              {tasks
                .sort((a, b) => a.position - b.position)
                .map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(
                      provided: DraggableProvided,
                      snapshot: DraggableStateSnapshot
                    ) => (
                      <TaskItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isDragging={snapshot.isDragging}
                        isCompleted={!!task.finished_at}
                      >
                        <Checkbox
                          type="checkbox"
                          checked={!!task.finished_at}
                          onChange={() => onTaskComplete(task.id)}
                        />
                        <TaskContent>
                          <TaskText isCompleted={!!task.finished_at}>
                            {task.content}
                            {task.finished_at && (
                              <DurationBadge
                                duration={
                                  task.finished_at.getTime() -
                                  task.created_at.getTime()
                                }
                              />
                            )}
                          </TaskText>
                        </TaskContent>

                        <DeleteButton onClick={() => onTaskDelete(task.id)}>
                          ×
                        </DeleteButton>
                      </TaskItem>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default Todo;
