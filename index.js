import express from 'express';
import taskRoutes from './routes/todo.js';
import connectDB from './config/dbConnection.js';

await connectDB();

const app = express();
const port = 3000;

app.use(express.json()); 
app.use('/todo', taskRoutes); 

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the To-Do List API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
