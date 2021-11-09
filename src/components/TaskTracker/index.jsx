import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { Button, Form, Input, DatePicker, Space, TimePicker, Select } from 'antd';
import moment from 'moment';

import './TaskTracker.scss';



const TaskTracker = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [sched, setSched] = useState('')

    const [show, toggleShow] = useState();

    const onSubmit = (e) => {
      e.preventDefault()

      if(!text){
        alert('Please add a task')
        return
      }

      onAdd({ text, sched })

      setText('')
      setSched('')
    }

    return (
        <div className='body-container' onSubmit={onSubmit}>
            <Button 
            className='add-button'
            onClick={() => 
                toggleShow(!show)}
            >
            Add
            </Button>
            {show &&
            <div className='add-task'>
                <Form 
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 8 }}
                  initialValues={{ remember: true }}
                  autoComplete="off">
                    <Form.Item 
                    label={<label 
                    style={{ color: "white" }}
                    >
                      Task
                      </label>} 
                      name="task" 
                      style={{ color: "#fff" }
                      }>
                      <Input 
                      value={text}
                      placeholder="Task"
                      onChange={(e) => setText(e.target.value)}
                       />
                    </Form.Item>
                    <Form.Item 
                    label={<label style={{ color: "white" }}>
                      Description/Schedule
                      </label>} 
                      name="sched">
                      <Input 
                      value={sched}
                      placeholder="Description/Schedule"
                      onChange={(e) => setSched(e.target.value)}
                       />
                    </Form.Item>
                </Form>
                <Button 
                className="add-task-button"
                onClick={onSubmit} 
                shape="circle"
                >
                +
                </Button>
                
            </div>
            }

        </div>
    )
}

export default TaskTracker
