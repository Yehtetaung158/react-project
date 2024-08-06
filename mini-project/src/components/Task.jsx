import React from 'react'

const Task = ({task, handleDelete}) => {
  return (
    <div className='border-2 border-gray-500 px-3 py-2 flex justify-between items-center'>
      <p className='text-lg text-gray-700'>{task}</p>
      <button className='bg-red-500 text-white px-6 py-[10px] border-2 hover:bg-red-600 transition-all duration-300' onClick={() => handleDelete(task)}>Delete</button>
    </div>
  )
}

export default Task