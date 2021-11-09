import React, { useState } from 'react'
import '../Task'
import Task from '../Task'
import './Tasks.scss'

const Tasks = ({ tasks, onDelete }) => {
    return (
      <div className='tasks-body'>
          {tasks.map((task, index) => (
          <Task 
            key={index} 
            task={task} 
            onDelete={onDelete} 
            />))}
      </div>
    )
}

export default Tasks
