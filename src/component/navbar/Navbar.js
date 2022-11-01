import React from 'react';
import Select from 'react-select';
import './navbar.css';
const options = [
    {value:'ALL',label:'ALL'},
    {value:'completed',label:'completed'},
    {value:'oncompleted',label:'oncompleted'},
]

const NavBar = ({onCompletedTodos,onChange,status,todos}) => {
    return ( 
        <header className='navbar'>
            {onCompletedTodos>0 && 
                <div className='oncomplete'>
                    <h4>onComplete todo</h4> 
                    <span>{onCompletedTodos}</span>
                </div>   
            }
            {todos.length>0 && 
            <div className='select'>
                <Select value={status} onChange={onChange} options={options} placeholder={status} />
            </div>
            }
        </header>
     );
};
 
export default NavBar;