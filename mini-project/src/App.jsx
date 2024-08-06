import React, { useState } from 'react'
import Heading from './components/Heading'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

const App = () => {
  let [Tasks, setTasks] = useState([
    "Complete project report",
    "Attend team meeting",
    "Review code for errors",
    "Update project documentation",
    "Send email to client"
]);
  

  return (
    <>
    <div className='container mx-auto py-7'>
      <Heading/>
      <AddTask setTasks={setTasks} tasks={Tasks}/>
      <TaskList tasks={Tasks} setTasks={setTasks}/>
    </div>
    </>
  )
}

export default App