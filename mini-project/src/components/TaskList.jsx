import React from "react";
import Task from "./Task";

const TaskList = ({ job, setTasks, doneTask }) => {
  const handleDelete = (removeTask) => {
    setTasks(job.filter((el) => el.id !== removeTask.id));
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl text-gray-600">TaskList ({job.length})</h1>
      {job.map((el) => (
        <Task
          tlk={el}
          key={el.id}
          handleDelete={handleDelete}
          doneTask={doneTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
