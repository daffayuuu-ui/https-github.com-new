import { useState, useEffect } from 'react';

const useTodoStorage = () => {
    const [todos, setTodos] = useState([]);

    // Load todos from localStorage on component mount
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos);
    }, []);

    // Save todos to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([...todos, { text: todo, completed: false }]);
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const completeTodo = (index) => {
        const newTodos = todos.map((todo, i) => 
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    return { todos, addTodo, deleteTodo, completeTodo };
};

export default useTodoStorage;