import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import {VscChromeClose} from "react-icons/all";
import {FiEdit2} from "react-icons/all";
import './Todo.css'

const Todo = ({todos, completeTodo, removeTodo, updateTodo, searchInput}) => {

    const  [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    };

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchInput.toLowerCase()));

    return filteredTodos.map((todo, index) => (
        <div className={todo.isComplete ? 'todoRow complete' : 'todoRow'} key={index}>
            <div className='checkTask'>
                <input className='checkBox' type="checkbox" />
                <div className='todoText' key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>
            </div>
            <div className='buttons'>
                <div className='buttonContainer buttonYellow'>
                    <FiEdit2
                        onClick={() => setEdit({id: todo.id, value: todo.text})}
                        className='editIcon'
                    />
                </div>
                <div className='buttonContainer buttonRed'>
                    <VscChromeClose
                        onClick={() => removeTodo(todo.id)}
                        className='deleteIcon'
                    />
                </div>
            </div>
        </div>
    ))

};

export default Todo;