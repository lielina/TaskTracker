import React from "react";
import { useState } from "react";

import Hn from "./componets/Headerr.js";
import Tasks from "./componets/Tasks";
import AddTask from "./componets/AddTask";


function App() {
 // const todolist=useSelector(selectTodolist) 
  const [tasks, setTasks] = useState([])


  // add task
  const addTask = task => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const [shwoAddtask, setshowaddtask] = useState(false);

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  // toggle reminder
  const toggleReminder = id => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  

  return (
    <div className="container">
      <Hn showAdd={shwoAddtask} onAdd={() => setshowaddtask(!shwoAddtask)} />
      {shwoAddtask && <AddTask />}
     
        <Tasks/>
      
      <footer />
    </div>
  );
}

export default App;
 