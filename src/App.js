import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTasks, setShowAddTasks] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'take out the trash',
      day: 'Feb 5th at 11:00am',
      reminder: false
    },
    {
      id: 2,
      text: 'wash the patio',
      day: 'Feb 6th at 05:00pm',
      reminder: false
    },
    {
      id: 3,
      text: 'walk woody',
      day: 'Feb 10th at 08:00am',
      reminder: false
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task }

    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTasks(!showAddTasks)}
        showAdd={showAddTasks}
      />
      {showAddTasks && <AddTask onAdd={addTask} />}
      {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
