import React from 'react'
import Task from './Task'

const TaskList = ({job, setTasks}) => {
  const handleDelete = (tsk) => {
    if (confirm("Are you sure you want to delete this task?")) {
      setTasks(job.filter((el) => el.id !== tsk.id));
    }
  };
  return (
    <div className='space-y-4'>
      <h1 className='text-2xl text-gray-600'>TaskList ({job.length})</h1>
      {job.map((el)=> (<Task tlk={el} key={el.id} handleDelete={handleDelete}/>))}
    </div>
  )
}

export default TaskList