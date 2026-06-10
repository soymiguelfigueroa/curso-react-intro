import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter () {
  const {
    completedTodos: completed,
    totalTodos: total,
  } = React.useContext(TodoContext);
  
  if (total === completed) {
    return (
      <h1>¡Has completado todos tus TODOS!</h1>
    );
  } else {
    return (
      <h1>Has completado <strong>{completed}</strong> de <strong>{total}</strong> TODOS</h1>
    );
  }
}

export { TodoCounter };