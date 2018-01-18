import React from 'react';

// Create component for new task composed of list item, text and icon
const Task = (props) => {
  // For each task create list item with specific text and icon to remove the task
  return (
    <li className='task-item'>{props.task.text} <span className='fa fa-trash-o task-remover pull-right' onClick={() => {props.remove(props.task.id)}}></span></li>
  );
}

export default Task;