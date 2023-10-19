const express = require('express');
const router = express.Router();
const db = require('../db'); // Import the database connection
const  Tasks = require('../models/Tasks')

// Define a route to get all to-do items
router.get('/', async (req, res) => {
    try {
        const tasks = await Tasks.findAll({
            order: [['createdAt', 'DESC']] // Sort by the 'createdAt' column in descending order
        });
        res.json(tasks);
    } catch (err) {
        console.error('Error retrieving tasks:', err);
        res.status(500).json({ error: 'An error occurred while retrieving tasks' });
    }
});

// Define a route to create a new to-do item
router.post('/', async (req, res) => {
    const newItem = req.body;

    try {
        const task = await Tasks.create({
            title: newItem.title,
            completed: false, // You can set this value as needed
        });

        res.status(201).json(task);
    } catch (err) {
        console.error('Error creating task:', err);
        res.status(500).json({ error: 'An error occurred while creating a task' });
    }
});

router.put('/:id', async (req, res) => {
    const itemId = req.params.id; // Get the ID of the to-do item from the URL
    const updatedData = req.body; // Updated data for the to-do item

    try {
        const todo = await Tasks.findByPk(itemId);

        if (!todo) {
            return res.status(404).json({ error: 'To-do item not found' });
        }

        // Update the to-do item
        await todo.update(updatedData);
        return res.json({ message: 'To-do item updated successfully' });
    } catch (err) {
        console.error('Error updating to-do item:', err);
        return res.status(500).json({ error: 'An error occurred while updating the to-do item' });
    }
});

router.delete('/:id', async (req, res) => {
    const itemId = req.params.id; // Get the ID of the to-do item from the URL

    try {
        const todo = await Tasks.findByPk(itemId);

        if (!todo) {
            return res.status(404).json({ error: 'To-do item not found' });
        }

        // Delete the to-do item
        await todo.destroy();
        return res.json({ message: 'To-do item deleted successfully' });
    } catch (err) {
        console.error('Error deleting to-do item:', err);
        return res.status(500).json({ error: 'An error occurred while deleting the to-do item' });
    }
});


// Add more routes for updating and deleting to-do items as needed

module.exports = router;
