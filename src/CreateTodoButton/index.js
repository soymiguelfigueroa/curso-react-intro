import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';

function CreateTodoButton () {
  const {
    setOpenModal,
  } = React.useContext(TodoContext);
  
  return (
    <button
      className='createTodo-button'
      onClick={() => {
        setOpenModal(true)
      }}
      >
      <img src='icon-add.svg' alt="Icon add" />
    </button>
  );
}

export { CreateTodoButton };