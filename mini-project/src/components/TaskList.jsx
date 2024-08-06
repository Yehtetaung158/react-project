import React from 'react'
import Task from './Task'

const TaskList = ({tasks}) => {
  return (
    <div className='space-y-4'>
      <h1 className='text-2xl text-gray-600'>TaskList ({tasks.length})</h1>
      {tasks.map((el)=> (<Task task={el}/>))}
    </div>
  )
}

export default TaskList