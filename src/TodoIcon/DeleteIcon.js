import React from 'react';
import { TodoIcon } from './';

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