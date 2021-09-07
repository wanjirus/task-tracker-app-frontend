import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react';
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks, setTasks] = useState(
    [
        {
           id:1,
           text:'Doctors appointment',
           day: 'feb 2021',
           reminder: true,
        },
        {
            id:2,
            text:'Meeting at school',
            day:'20th june',
            reminder:true,
    
        },
        {
            id:3,
            text:'Meeting at school',
            day:'20th june',
            reminder:true,
    
        }
    ]
)
const addTask =(task)=>{
  const id = Math.floor(Math.random() * 10000)+1
  const newTask ={id, ...task}
  setTasks([...tasks, newTask])
}
const deleteTask=(id) =>{
  setTasks(tasks.filter((task) => task.id !==id))
}
//  toggle reminder
const toggleReminder = (id) =>{
  setTasks(
    tasks.map((task) =>
     task.id ===id?
      {...task, reminder:
        !task.reminder} : task))
}

  return (
    <div className="container">
 <Header onAdd={()=>setShowAddTask(!showAddTask)}
  showAdd={showAddTask} 
 />
 {showAddTask && < AddTask  onAdd={addTask}/>}
 {tasks.length>0 ?(
 <Tasks tasks={tasks} 
 onDelete={deleteTask}
 onToggle = {toggleReminder}
 />):( 'No tasks to show')}
    </div>
  );
}

export default App;
