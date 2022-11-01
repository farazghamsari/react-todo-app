import React, { useEffect, useState } from 'react';
import NavBar from './navbar/Navbar';
import TodoList from './TodoList';
import TodoForm from './todoForm/TodoForm';

const TodoApp = () => {
    const [todos,setTodos] = useState([])
    const [status,setStatus] = useState('ALL')
    const[filterTodos,setFilterTodos] = useState ([])

    useEffect(()=>{
        filteredTodos(status)
    },[todos,status])

    const todoInput = (input) => {
        console.log(input);
        const newTodo = {
            id:Math.floor(Math.random()*1000),
            title:input,
            isComplete:false,
        };
        setTodos([...todos,newTodo])
        console.log(todos);
    };

    const completeTodo = (id)=>{
        const indexTodo = todos.findIndex((todo)=> todo.id === id )
        const selectedTodo = {...todos[indexTodo]}
        selectedTodo.isComplete = !selectedTodo.isComplete;
        const copyTodos = [...todos]
        copyTodos[indexTodo] = selectedTodo
        setTodos(copyTodos)
    }

    const deleteTodo = (id) => {
        const filteredTodos = todos.filter((todo)=> todo.id !== id )
        console.log(filteredTodos);
        setTodos(filteredTodos)
    }
    const filteredTodos = (status)=>{
       switch (status) {
        case 'ALL':
            setFilterTodos(todos)
            break;
        case 'completed':
            setFilterTodos(todos.filter(todo => todo.isComplete === true))
            break;
        case 'oncompleted':
            setFilterTodos(todos.filter( todo => todo.isComplete === false))
            break;
        default:
            setFilterTodos(todos)
            break;
       }
    }
    const changeHandler = (e)=>{
        setStatus(e.value)
        
     }
    return ( 
        <div className='container'>
            <h1>todo-app</h1>
            <TodoForm todoInput={todoInput}/>
            <NavBar

                onChange = {changeHandler}
                onCompletedTodos={todos.filter((todo) => !todo.isComplete).length}
                status={status}
                todos={todos}
            />
            <TodoList todos={filterTodos} onComplete={completeTodo} onDelete={deleteTodo}/>
        </div>
     );
};
 
export default TodoApp;