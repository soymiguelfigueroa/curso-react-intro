import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem (props) {
  return (
    <li>
      <CompleteIcon
        complete={props.completed}
        onComplete={props.onComplete}
      />
      
      <p className={`${props.completed ? 'complete--active' : ''}`}>{props.text}</p>
      
      <DeleteIcon
        delete={props.deleted}
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };