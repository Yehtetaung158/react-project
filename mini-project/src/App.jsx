import React, { useState } from 'react'
import Heading from './components/Heading'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

const App = () => {
  let [Tasks, setTasks] = useState([
    { id: 1, task: "Complete project report", isDone: false },
    { id: 2, task: "Attend team meeting", isDone: false },
    { id: 3, task: "Review code for errors", isDone: false },
    { id: 4, task: "Update project documentation", isDone: false },
    { id: 5, task: "Send email to client", isDone: false }
]);
  

  return (
    <>
    <div className='container mx-auto py-7'>
      <Heading/>
      <AddTask setTasks={setTasks} tasks={Tasks}/>
      <TaskList job={Tasks} setTasks={setTasks}/>
    </div>
    </>
  )
}

export default App