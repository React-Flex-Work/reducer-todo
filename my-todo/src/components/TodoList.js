import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-text">
            {props.initialTodos.map(item => (
                <Todo key={item.id} item={item} toggleCompleted={props.toggleCompleted} />
            ))}
        </div>
    );
};

export default TodoList;