import React from 'react';
import Task from './Task';

// Create component for list of tasks
const AppList = ({tasks,remove}) => {
  // Create new node for each task
  const taskNode = tasks.map((task) => {
    return (<Task task={task} key={task.id} remove={remove}/>)
  });

  // Return the list component with all tasks
  return (<ul className='task-list' id='task-list'>{taskNode}</ul>);
}

export default AppList;