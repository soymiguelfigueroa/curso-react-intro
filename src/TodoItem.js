import './TodoItem.css';

function TodoItem (props) {
  return (
    <li>
      <span 
        className='complete'
        onClick={() => props.onComplete(props.text)}
      ><img src='icon-check.svg' alt="Icon complete" /></span>
      <p className={`${props.completed ? 'complete--active' : ''}`}>{props.text}</p>
      <span 
        className='delete'
        onClick={() => props.onDelete(props.text)}
      ><img src='icon-delete.svg' alt="Icon delete" /></span>
    </li>
  );
}

export { TodoItem };