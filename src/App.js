import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
    const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'take out the trash'
    },
    {
      id: 2,
      text: 'wash the patio'
    },
    {
      id: 3,
      text: 'walk woody'
    }
  ])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
