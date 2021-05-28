import { FaTimes } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../featuers/actions';
 
const Task = ({ task }) => {
  let dispatch = useDispatch();
  return (
    <div className={ `event ${task.reminder?'reminder':'nn'}`} >
      <h3>
        
        {task.text} {""}
        <FaTimes style={{ color: "red" }} onClick= {() => dispatch(deleteTodo(task.id))} />
      </h3>
      <p>{task.day} </p>
    </div>
  );
};

export default Task;
