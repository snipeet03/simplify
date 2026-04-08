import TaskCard from "./TaskCard";

const KanbanColumn = ({ title, tasks }) => {
  return (
    <div className="w-1/3 bg-gray-200 p-4 rounded">
      <h2 className="font-bold mb-4">{title}</h2>

      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
};

export default KanbanColumn;