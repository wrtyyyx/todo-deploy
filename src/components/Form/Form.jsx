import React, { useState } from 'react';
import './Form.css';
import Card from "../Card/Card.jsx";

const Form = () => {
    const [value, setValue] = useState('');
    const [todo, setTodo] = useState([]);

    const onSubmit = (event) => {
        event.preventDefault();
        putTodo(value);
        setValue('');
    };

    const putTodo = (value) => {
        if (value.trim().length !== 0) {
            setTodo([...todo, { text: value, done: false }]);
        } else {
            alert('Please enter a valid task.');
        }
    };

    const deleteTodo = (index) => {
        const updatedTodo = todo.filter((_, i) => i !== index);
        setTodo(updatedTodo);
    };

    const toggleDone = (index) => {
        const updatedTodo = todo.map((item, i) =>
            i === index ? { ...item, done: !item.done } : item
        );
        setTodo(updatedTodo);
    };

    return (
        <div className="container">
            <form id="form" onSubmit={onSubmit}>
                <div className="input d-flex flex-column flex-sm-row justify-content-center border w-100 w-sm-50 m-auto p-3 rounded mb-3">
                    <label htmlFor="task" className="form-label text-center text-sm-start">
                        Enter your task:
                    </label>
                    <input
                        name="task"
                        className="form-control mx-0 mx-sm-2 my-2 my-sm-0 bg-transparent text-white"
                        type="text"
                        placeholder="Task..."
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <button type="submit" className="btn btn-success mt-2 mt-sm-0">
                        Add
                    </button>
                </div>
            </form>

            <div>
                {todo.length === 0 ? (
                    <div className="text-center mt-3 text-muted">No tasks yet. Add some...</div>
                ) : (
                    <div className="todos row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                        {todo.map((item, index) => (
                            <Card
                                key={index}
                                done={item.done}
                                text={item.text}
                                index={index}
                                deleteTodo={deleteTodo}
                                toggleDone={toggleDone}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Form;
