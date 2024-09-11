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
    <div
     className='flex h-screen w-screen flex-col bg-gray-300 justify-center items-center gap-3 p-4'>
      <h1 className='text-5xl pb-11 font-semibold  underline'>To-Do List</h1>
      <input
      className='text-pretty font-medium p-3 shadow-inner shadow-black capitalize content-stretch px-9'
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new to-do"
      />
      <button className='px-8 py-3 mt-3 text-2xl capitalize shadow-2xl bg-green-600' onClick={addTodo}>Add</button>
      <ul className='border border-black p-11  gap-2 bg-slate-600 text-white text-2xl capitalize  mt-4'>
        {todos.map((todo) => (
          <li className='mb-1 min-w-screen' key={todo._id}>
            {todo.title} | <button className='bg-red-700 px-2 py-1' onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
