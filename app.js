const express = require('express');
const app = express();
const port = 3000;

// Parse JSON request bodies
app.use(express.json());

// Define your API routes
const todoRoutes = require('./routes/todo');
app.use('/api/todo', todoRoutes);

const sequelize = require('./db'); // Import your Sequelize instance

// Synchronize the database
sequelize.sync()
    .then(() => {
        console.log('Database synchronized.');
    })
    .catch((err) => {
        console.error('Database synchronization error:', err);
    });

app.listen(port,  "0.0.0.0", () => {
    console.log(`Todo List API is running on http://localhost:${port}`);
});
