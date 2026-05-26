import React from 'react';
import { TodoIcon } from './TodoIcon';

function DeleteIcon ({ deleted, onDelete }) {
    return (
        <TodoIcon 
            type="delete" 
            color={deleted ? 'red' : 'gray'}
            onClick={onDelete}
        />
    );
}

export { DeleteIcon };