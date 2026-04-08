"use client";

import KanbanColumn from "./KanbanColumn";

const KanbanBoard = ({ tasks }) => {
  const todo = tasks.filter((t) => t.status === "todo");
  const inProgress = tasks.filter(
    (t) => t.status === "in-progress"
  );
  const done = tasks.filter((t) => t.status === "done");

  return (
    <div className="flex gap-4">
      <KanbanColumn title="To Do" tasks={todo} />
      <KanbanColumn title="In Progress" tasks={inProgress} />
      <KanbanColumn title="Done" tasks={done} />
    </div>
  );
};

export default KanbanBoard;