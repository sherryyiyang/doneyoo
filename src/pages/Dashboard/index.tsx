import React, { useState, useCallback, useMemo } from "react";
import styled from "styled-components";
import Calendar from "../../components/Dashboard/Calendar";
import Todo from "../../components/Dashboard/Todo";
import { Task, TaskFormData } from "../../types/Task";
import Input from "../../components/Common/Input";
import Button from "../../components/Common/Button";
import TaskModal from "../../components/Dashboard/TaskModal";
import "../../styles/colors.css";

const Container = styled.div`
  min-height: 100vh;
  background: var(--bg-gradient-main);
  padding: 32px;
`;

const Header = styled.div`
  max-width: 1400px;
  margin: 0 auto 32px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 24px;
  background: var(--bg-gradient-card);
  border-radius: 16px;
  box-shadow: var(--shadow-colored);
  border: 1px solid transparent;
  background-clip: padding-box;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: var(--border-gradient-light);
  }
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: var(--purple-primary);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SearchBar = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  background: var(--bg-gradient-card);
  padding: 24px;
  border-radius: 16px;
  box-shadow: var(--shadow-colored);
  border: 1px solid transparent;
  background-clip: padding-box;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: var(--border-gradient-primary);
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 16px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.9);
  }
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: 600;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: var(--purple-tertiary);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 32px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.section`
  background: var(--bg-gradient-card);
  border-radius: 16px;
  box-shadow: var(--shadow-colored);
  overflow: hidden;
  border: 1px solid transparent;
  background-clip: padding-box;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: var(--border-gradient-light);
  }
`;

const FilterBar = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px 24px;
  border-bottom: 1px solid transparent;
  background: linear-gradient(
    to right,
    var(--purple-light),
    var(--purple-lightest)
  );
  background-clip: padding-box;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: -1px;
    left: 0;
    z-index: -1;
    background: var(--border-gradient-light);
  }
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--purple-primary);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: white;
    box-shadow: var(--shadow-colored);
  }

  &:focus {
    outline: none;
    background: white;
    box-shadow: 0 0 0 2px var(--purple-light);
  }

  option {
    background: white;
    color: var(--purple-primary);
  }
`;

const DashboardPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Project Meeting",
      description: "Weekly team sync",
      date: new Date(),
      completed: false,
      color: "var(--primary-500)",
      priority: "high",
      created_at: new Date(),
      updated_at: new Date(),
      category: "Work",
      tags: ["meeting", "team"],
      reminder: true,
      repeat: "weekly",
    },
    {
      id: "2",
      title: "Review Documentation",
      description: "Review and update project docs",
      date: new Date(),
      completed: true,
      color: "var(--secondary-500)",
      priority: "medium",
      created_at: new Date(Date.now() - 24 * 60 * 60 * 1000),
      updated_at: new Date(),
      finished_at: new Date(),
      category: "Documentation",
      tags: ["docs", "review"],
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const filteredTasks = useMemo(() => {
    return tasks
      .filter((task) => {
        const matchesSearch = task.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesCategory =
          categoryFilter === "all" || task.category === categoryFilter;
        const matchesPriority =
          priorityFilter === "all" || task.priority === priorityFilter;
        return matchesSearch && matchesCategory && matchesPriority;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "date":
            return a.date.getTime() - b.date.getTime();
          case "priority":
            const priorityOrder = { high: 0, medium: 1, low: 2 };
            return (
              (priorityOrder[a.priority || "low"] || 2) -
              (priorityOrder[b.priority || "low"] || 2)
            );
          case "title":
            return a.title.localeCompare(b.title);
          default:
            return 0;
        }
      });
  }, [tasks, searchQuery, categoryFilter, priorityFilter, sortBy]);

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;
    const upcoming = tasks.filter(
      (task) => !task.completed && task.date > new Date()
    ).length;
    const overdue = tasks.filter(
      (task) => !task.completed && task.date < new Date()
    ).length;

    return { total, completed, upcoming, overdue };
  }, [tasks]);

  const categories = useMemo(() => {
    return Array.from(
      new Set(tasks.map((task) => task.category).filter(Boolean))
    );
  }, [tasks]);

  const handleTaskComplete = useCallback((taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
              updated_at: new Date(),
              finished_at: !task.completed ? new Date() : undefined,
            }
          : task
      )
    );
  }, []);

  const handleTaskAdd = useCallback((title: string, date: Date) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      date,
      completed: false,
      color: "var(--primary-500)",
      priority: "medium",
      created_at: new Date(),
      updated_at: new Date(),
      category: "General",
      tags: [],
      reminder: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }, []);

  const handleTaskDelete = useCallback((taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }, []);

  const handleTaskUpdate = useCallback(
    (taskId: string, updates: Partial<TaskFormData>) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId
            ? {
                ...task,
                ...updates,
                updated_at: new Date(),
              }
            : task
        )
      );
    },
    []
  );

  const handleDateSelect = useCallback((date: Date) => {
    setSelectedDate(date);
    setIsCreateModalOpen(true);
  }, []);

  const handleModalSubmit = useCallback((taskData: TaskFormData) => {
    const newTask: Task = {
      ...taskData,
      id: Date.now().toString(),
      created_at: new Date(),
      updated_at: new Date(),
      color:
        taskData.priority === "high"
          ? "var(--error-500)"
          : taskData.priority === "medium"
          ? "var(--primary-500)"
          : "var(--secondary-400)",
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setIsCreateModalOpen(false);
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Title>Dashboard</Title>
          <SearchBar>
            <Input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              variant="outline"
              onClick={() => setIsCreateModalOpen(true)}
            >
              New Task
            </Button>
          </SearchBar>
        </HeaderContent>
        <Stats>
          <StatItem>
            <StatValue>{stats.total}</StatValue>
            <StatLabel>Total Tasks</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>{stats.completed}</StatValue>
            <StatLabel>Completed</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>{stats.upcoming}</StatValue>
            <StatLabel>Upcoming</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>{stats.overdue}</StatValue>
            <StatLabel>Overdue</StatLabel>
          </StatItem>
        </Stats>
      </Header>

      <Grid>
        <Section>
          <FilterBar>
            <Select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>
            <Select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
            >
              <option value="all">All Priorities</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </Select>
            <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="date">Sort by Date</option>
              <option value="priority">Sort by Priority</option>
              <option value="title">Sort by Title</option>
            </Select>
          </FilterBar>
          <Calendar tasks={filteredTasks} onDateSelect={handleDateSelect} />
        </Section>
        <Section>
          <Todo
            tasks={filteredTasks}
            onTaskComplete={handleTaskComplete}
            onTaskAdd={handleTaskAdd}
            onTaskDelete={handleTaskDelete}
            onTaskUpdate={handleTaskUpdate}
          />
        </Section>
      </Grid>

      <TaskModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleModalSubmit}
        initialDate={selectedDate || undefined}
      />
    </Container>
  );
};

export default DashboardPage;
