import Todo from "./todo/Todo";
import React from 'react';
const TodoList = ({todos , onComplete , onDelete}) => {

    const renderTodo = () => {
        if(todos.length === 0) return <h4>Try to add some todos ...</h4>;

  
        return todos.map((todo) => {
                return (
                    <Todo key={todo.id} todo={todo} 
                        onComplete={() => onComplete(todo.id)}
                        onDelete={() => onDelete(todo.id)}
                    />
                );
            });
    }
    return <div className='todo-list'>{renderTodo()}</div>;
}
 
export default TodoList;