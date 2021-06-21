import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
    const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'take out the trash',
      day: 'Feb 5th at 11:00am'
    },
    {
      id: 2,
      text: 'wash the patio',
      day: 'Feb 6th at 05:00pm'
    },
    {
      id: 3,
      text: 'walk woody',
      day: 'Feb 10th at 08:00am'
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No Tasks to Show'}
    </div>
  );
}

const deleteTask = (id) => {

}

export default App;
