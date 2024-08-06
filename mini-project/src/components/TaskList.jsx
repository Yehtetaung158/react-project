import React from 'react'
import Task from './Task'

const TaskList = ({tasks, setTasks}) => {
  const handleDelete=(tsk)=>{
    setTasks(tasks.filter((el)=> el !== tsk));
  };
  return (
    <div className='space-y-4'>
      <h1 className='text-2xl text-gray-600'>TaskList ({tasks.length})</h1>
      {tasks.map((el)=> (<Task task={el} key={el} handleDelete={handleDelete}/>))}
    </div>
  )
}

export default TaskList