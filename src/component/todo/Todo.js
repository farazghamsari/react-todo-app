import { BiTrash } from "react-icons/bi";
import React from 'react';
import './todo.css'
const Todo = ({todo , onComplete,onDelete}) => {
    return ( 
        <div className="todo">
            <h4 className={todo.isComplete ? 'completed' : ""}>{todo.title}</h4>
            <div className="btns">
                <button className="delete-btn" onClick={onDelete}>
                    <BiTrash />
                </button>
                <button className={!todo.isComplete ? 'complete-btn' : "on"} onClick={onComplete}>
                    {!todo.isComplete ? 'complete' : 'oncomplete'}
                </button>                
            </div>

        </div>
     );
}
 
export default Todo;