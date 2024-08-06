import React, { useState } from 'react'

const AddTask = ({setTasks, tasks}) => {
  const [Task, setTask] = useState("");
  const handleOnChange=(event)=>{
    setTask(event.target.value)
  };
  const handleOnClick=()=>{
    setTasks([...tasks, Task]);
    setTask("");
  };
  return (
    <div className='flex items-center my-4'>
        <input type="text" value={Task} onChange={handleOnChange} className='w-2/3  p-2 border-2 border-gray-500 outline-none focus:border-blue-500 transition-all duration-300 px-2 py-2' placeholder='Add Task' />
        <button onClick={handleOnClick} className='bg-blue-500 text-white px-6 py-[10px] border-2 hover:bg-blue-600 transition-all duration-300'>Add</button>
    </div>
  )
}

export default AddTask