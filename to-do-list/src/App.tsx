
import './App.css'
import TaskLists from './TaskLists'
import { useState } from 'react'
import TodDoForm from './TodDoForm'
import logo from './assets/todolist-2-svgrepo-com.svg'
import errLogo from './assets/task-past-due-symbolic-svgrepo-com.svg'


function App() {

  const [visibility,setVisibility]=useState(true)

  const [task,setTask]=useState([
    {id:0,text:''}
])

  return (
    <>
    <div className="alert alert-info" role="alert">
      <img src={logo} alt="todo list logo"/>    
      <h1>Todo List</h1>
    </div>
    
    <div>
      <TodDoForm 
        onClickAdd={(taskRef)=>(
          setTask([...task,{id:task.length+1,text:taskRef}]),
          setVisibility(false)        
        )}
      />
    </div>

    {(visibility==true ||task.length==1)
      &&<div className='alert alert-warning' role='alert'>
          <img className='no-task-logo' src={errLogo} alt="no task found logo" />
          <h1>No tasks!!!</h1>
        </div>
    }

    <div className="theForm mb-3">
      <TaskLists 
        onClickDelete={
          (id)=>setTask(task.filter(e=>e.id!==id))} 
        tasks={task}
      />
    </div>



      
    </>
  )
}

export default App
