import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:5000/todos');
    setTodos(response.data);
  };

  const addTodo = async () => {
    if (!title) return;
    const response = await axios.post('http://localhost:5000/todos', { title });
    setTodos([...todos, response.data]);
    setTitle('');
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-br from-gray-800 to-gray-900 p-6 gap-6">
    <h1 className="text-4xl font-bold text-white underline">To-Do List</h1>
    
    <div className="flex items-center w-full max-w-md">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new to-do"
        onKeyDown={(e) => e.key === 'Enter' && addTodo()} 
        className="flex-1 p-3 text-lg bg-gray-700 text-white border border-gray-600 rounded-l-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
      />
      <button
        onClick={addTodo}
        className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-r-md hover:bg-blue-700 shadow-lg transition duration-300"
      >
        Add
      </button>
    </div>
  
    <ul className="w-full max-w-md mt-4 space-y-3">
      {todos.map((todo) => (
        <li
          key={todo._id}
          className="flex justify-between items-center p-3 text-xl text-white bg-gray-700 rounded-md shadow-sm border border-gray-600"
        >
          <span className="flex-1">{todo.title}</span>
          <button
            onClick={() => deleteTodo(todo._id)}
            className="px-3 py-1 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700 transition duration-300"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
  

  );
};

export default TodoList;
