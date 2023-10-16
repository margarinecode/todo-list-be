const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

// Parse JSON request bodies
app.use(express.json());
app.use(cors());

// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: 'GET,POST,PUT,DELETE',
//     allowedHeaders: 'Content-Type,Authorization',
// }));
app.use(cors({
    origin: 'https://todo-list-fe-murex.vercel.app/',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
}));

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
