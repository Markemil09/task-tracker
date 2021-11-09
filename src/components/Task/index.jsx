import React from 'react'
import './Task.scss'
import { Button } from 'antd';
import removeIcon from './remove_circle.png'

const Task = ({ task, onDelete }) => {
  return (
    <div className="task-body">
      <p>{task.text} <Button className='delete-button' onClick={() => onDelete(task.id)}> <img src={removeIcon} alt="del" /></Button></p>
      <p className='task-sched'>{task.sched}</p>
        
    </div>
  )
}

export default Task
