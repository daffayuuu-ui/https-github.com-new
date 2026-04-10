import React, { useState } from 'react';
import { useTodoStorage } from '../hooks/useTodoStorage';
import '../styles/TodoApp.css';

const TodoApp = () => {
    const { todos, addTodo, deleteTodo, completeTodo } = useTodoStorage();
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo) {
            addTodo(newTodo);
            setNewTodo('');
        }
    };

    return (
        <div className="todo-app">
            <h1>To-Do List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        {todo.text}
                        <button onClick={() => completeTodo(todo.id)}>Complete</button>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
