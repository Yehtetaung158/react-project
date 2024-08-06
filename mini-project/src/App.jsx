import React from 'react'
import Heading from './components/Heading'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

const App = () => {
  let tasks = [
    "Complete project report",
    "Attend team meeting",
    "Review code for errors",
    "Update project documentation",
    "Send email to client"
];

  return (
    <>
    <div className='container mx-auto py-7'>
      <Heading/>
      <AddTask/>
      <TaskList tasks={tasks}/>
    </div>
    </>
  )
}

export default App