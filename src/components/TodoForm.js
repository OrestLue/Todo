import React, {useState, useEffect, useRef} from 'react';
import './TodoForm.css';
import {MdDone} from "react-icons/all";

const TodoForm = (props) => {
    const [inputTodo, setInputTodo] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
       inputRef.current.focus()
    });

    const changeHandler = e => {
        setInputTodo(e.target.value)
    };

    const submitHandler = e => {
        e.preventDefault();

        let id = Math.floor(Math.random() * 10000);

        localStorage.setItem(id.toString(), inputTodo);

        props.onSubmit({
            id: id,
            text: inputTodo
        });

        setInputTodo('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='todoForm'>
                <input
                    className='todoInput'
                    type='text'
                    placeholder='Add a todo'
                    value={inputTodo}
                    name='text'
                    onChange={changeHandler}
                    ref={inputRef}
                />
                <button className='todoButton'>
                    <MdDone className='iconStyle' />
                </button>
            </div>
        </form>
    )
};

export default TodoForm