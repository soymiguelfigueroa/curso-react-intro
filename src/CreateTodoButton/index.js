import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';
import { ReactComponent as CreateSVG } from './add.svg';

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
      <CreateSVG
        alt={"Icon add"}
      />
    </button>
  );
}

export { CreateTodoButton };