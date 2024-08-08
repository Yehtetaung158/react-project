import React, { useState } from "react";
import Heading from "./components/Heading";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const App = () => {
  let [Tasks, setTasks] = useState([
    { id: 1, task: "Complete project report", isDone: false },
    { id: 2, task: "Attend team meeting", isDone: false },
    { id: 3, task: "Review code for errors", isDone: false },
    { id: 4, task: "Update project documentation", isDone: false },
    { id: 5, task: "Send email to client", isDone: false },
  ]);

  // This function is called when a task is marked as done or undone.
  // It takes an 'id' parameter which is the id of the task to be modified.
  // The function updates the state of the tasks by mapping through the array of tasks.
  // For each task, if the task's id matches the id passed to the function,
  // the task is updated by toggling the 'isDone' property.
  // If the task's id does not match the id passed to the function,
  // the task is left unchanged.
  // The updated array of tasks is then passed to the setTasks function to update the state.

  // const doneTasks = (id) => {
  //   setTasks(
  //     Tasks.map((task) => {
  //       // If the task's id matches the id passed to the function,
  //       // update the task by toggling the 'isDone' property.
  //       if (task.id === id) {
  //         return { ...task, isDone: !task.isDone };
  //       }
  //       // If the task's id does not match the id passed to the function,
  //       // leave the task unchanged.
  //       return task;
  //     })
  //   );
  // };
  const doneTask = (y) => {
    setTasks(
      Tasks.map((x) => {
        x.id === y.id ? { ...x, isDone: !x.isDone } : x;
      })
    );
  };
  return (
    <>
      <div className="container mx-auto py-7">
        <Heading />
        <AddTask setTasks={setTasks} tasks={Tasks} />
        <TaskList
          job={Tasks}
          setTasks={setTasks}
          key={Tasks.id}
          doneTask={doneTask}
        />
      </div>
    </>
  );
};

export default App;
