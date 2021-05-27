import React from "react";
import { useState } from "react";

import Hn from "./componets/Headerr.js";
import Tasks from "./componets/Tasks";
import AddTask from "./componets/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointement",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Meeting at schoool",
      day: "Feb 6th at 1:30pm",
      reminder: true
    },
    {
      id: 3,
      text: "Food shoping",
      day: "Feb 5th at 2:30 pm",
      reminder: ""
    }
  ]);

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
      {shwoAddtask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
          "NO TASKS TO SHOW :("
        )}
      <footer />
    </div>
  );
}

export default App;
