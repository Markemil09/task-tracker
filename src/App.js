import React, { useState, useEffect } from 'react'
import './App.css';
import TaskTracker from './components/TaskTracker';
import Tasks from './components/Tasks';

function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromBe = await fetchTasks()
      setTasks(tasksFromBe)
    }

    getTasks()
  }, [])

  //fetch data from backend

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:8080/api/v1/tasks')
    const data = await res.json()

    return data
  }

  //Add Task
    const addTask = async (task) => {
      const res = await fetch('http://localhost:8080/api/v1/tasks/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })

      const data = await res.json()

      setTasks([...tasks, data])
    }

    // const id = Math.floor(Math.random() * 10000) +1
    // const newTask = { id, ...task}
    // setTasks([...tasks, newTask])

  //Delete
    const deleteTask = async (id) => {
      await fetch(`http://localhost:8080/api/v1/tasks/${id}`, {
        method: 'DELETE'
      })

      setTasks(tasks.filter((task) => task.id !== id))
    }

  return (
    <div className="App">
      <TaskTracker onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No Tasks to show'}
    </div>
  );
}

export default App;
