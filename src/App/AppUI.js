import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { TodoEmpty } from '../TodoEmpty';
import { TodoContext } from '../TodoContext';

function AppUI() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({ 
          searchedTodos, 
          completeTodo, 
          deleteTodo,
          loading,
          error
        }) => (
          <TodoList>
            {loading && (
              <>
                <TodoLoading />
                <TodoLoading />
                <TodoLoading />
              </>
            )}
            {error && <TodoError />}
            {(!loading && !searchedTodos.length) && <TodoEmpty />}

            {searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </>
  );
}

export { AppUI };