import React, { useState } from 'react';

const AddTask = ({ setTasks, tasks }) => {
  const [task, setTask] = useState("");

  const handleOnChange = (event) => {
    setTask(event.target.value);
  };

  const handleOnClick = () => {
    if (task.trim()) { // Prevent adding empty tasks
      setTasks([
        ...tasks,
        { id: Date.now(), task, isDone: false } // Generate a unique id based on timestamp
      ]);
      setTask(""); // Clear the input field
    }
  };

  return (
    <div className='flex items-center my-4 justify-center'>
      <input
        type="text"
        autoFocus
        value={task}
        onChange={handleOnChange}
        className='w-2/3 p-2 border-2 border-gray-500 outline-none focus:border-blue-500 transition-all duration-300'
        placeholder='Add Task'
      />
      <button
        onClick={handleOnClick}
        className='bg-blue-500 text-white px-6 py-[10px] border-2 hover:bg-blue-600 transition-all duration-300'
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
