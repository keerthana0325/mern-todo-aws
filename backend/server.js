import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model('Task', taskSchema);

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.error('Error getting tasks:', err);
    res.status(500).send('Error getting tasks');
  }
});

app.post('/tasks', async (req, res) => {
  try {
    const { title } = req.body;

    if (typeof title !== 'string' || !title.trim()) {
      return res.status(400).json({ error: 'Task title is required' });
    }

    const newTask = new Task({
      title: title.trim(),
      completed: false,
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    console.error('Error saving task:', err);
    res.status(500).send('Error saving task');
  }
});

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  }
}

startServer();