import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}/tasks`)
      .then(res => setTasks(res.data))
      .catch(err => console.error('Error fetching tasks:', err));
  }, []);

  const addTask = async () => {
    const title = newTask.trim();

    if (!title) return;

    try {
      const res = await axios.post(`${API_URL}/tasks`, {
        title,
        completed: false,
      });

      setTasks(prevTasks => [...prevTasks, res.data]);
      setNewTask('');
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task"
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;