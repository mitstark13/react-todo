import React from 'react';

// Create component for app header composed of input and button
const AppHead = ({addTask}) => {
  let inputElement;
  
  return (
    <div className='input-group'>
      <input ref={node => {
        inputElement = node;
      }} className='form-control' type='text' />

      <button onClick={() => {
        addTask(inputElement.value);
        inputElement.value = '';
      }} className='input-group-addon'>
        Add task
      </button>
    </div>
  );
};

export default AppHead;