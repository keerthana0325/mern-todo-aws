import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const taskSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
  });
  
  const Task = mongoose.model('Task', taskSchema);
  
  // Routes
  
  app.get('/', (req, res) => {
    res.send('Backend is running!');
  });
  
  app.get('/tasks', async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (err) {
      res.status(500).send('Error getting tasks');
    }
  });
  
  app.post('/tasks', async (req, res) => {
    const newTask = new Task(req.body);
    try {
      await newTask.save();
      res.status(201).json(newTask);
    } catch (err) {
      res.status(500).send('Error saving task');
    }
  });
  
  // Start server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  