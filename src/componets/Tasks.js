import { useSelector } from "react-redux";
import Task from "./Task";

//const DeleteTask = id => { };
const Tasks = () => {
  const todos = useSelector(state => state);
  console.log(todos);
  
  return (

    <div>
      {todos.map(task => (
        <Task
          key={todos.id}
          task={task}
          // onDelete={onDelete}
          // onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Tasks;
