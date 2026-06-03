import './TodoCounter.css';

function TodoCounter ({ total, completed }) {
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