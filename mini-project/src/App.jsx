import React from 'react'
import Heading from './components/Heading'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

const App = () => {
  return (
    <>
    <div className='container mx-auto py-7'>
      <Heading/>
      <AddTask/>
      <TaskList/>
    </div>
    </>
  )
}

export default App