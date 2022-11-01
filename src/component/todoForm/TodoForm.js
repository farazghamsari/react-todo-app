import React, {useState } from 'react';
import './todoForm.css'
const TodoForm = (props) => {
    const [value,setValue] = useState("")

    const changeHandler = (e) =>{
        setValue(e.target.value);
    }

   const addHandler = (e) => {
       e.preventDefault();

       if(!value){
        alert('plesae enter todo');
        return;
       }
        props.todoInput(value);
        setValue("");
   }
    
    return ( 
        <form onSubmit={addHandler}>
            <div className='form-control'>
                <input type='text' onChange={changeHandler} value={value} placeholder={"add new todo ..."}/>
                <button type='submit'>add</button>
            </div>
        </form>
     );
}
 
export default TodoForm;