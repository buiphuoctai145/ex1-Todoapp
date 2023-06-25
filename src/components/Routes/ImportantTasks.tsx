import React, { useState, useEffect } from "react";
import { Task } from "../../to";
import { useAppSelector } from "../../context/hooks";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const ImportantTasks: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const [importantTasks, setImportantTasks] = useState<Task[]>([]);

  useEffect(() => {
    const filteredTasks: Task[] = tasks.filter((task: Task) => task.important);
    setImportantTasks(filteredTasks);
  }, [tasks]);

  useDescriptionTitle("Tasks marked as important", "Important tasks");

  return (
    <LayoutRoutes title="Important tasks" tasks={importantTasks}></LayoutRoutes>
  );
};

export default ImportantTasks;
