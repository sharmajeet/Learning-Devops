const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new todo
router.post('/', async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
    try {
      console.log('DELETE /todos/:id - Request ID:', req.params.id); // Log the request ID
  
      // Find and delete the todo by ID
      const todo = await Todo.findByIdAndDelete(req.params.id);
  
      if (!todo) {
        console.log('Todo not found'); // Log if the todo is not found
        return res.status(404).json({ message: 'Todo not found' });
      }
  
      console.log('Todo deleted successfully'); // Log successful deletion
      res.json({ message: 'Todo deleted' });
    } catch (err) {
      console.error('Error deleting todo:', err); // Log the error
      res.status(500).json({ message: 'Server error while deleting the todo' });
    }
  });
  

module.exports = router;
