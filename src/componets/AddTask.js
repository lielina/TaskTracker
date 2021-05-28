import { useState } from "react";
import{ useDispatch} from 'react-redux'
import { addTodo } from "../featuers/actions";




const AddTask = () => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const [value, setvalue] = useState()
  const dispatch = useDispatch()
  const onSubmit = e => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }
      
    dispatch(addTodo({
      id: Date.now,
      text: text,
      day: day,
      reminder: reminder
    }))
    setDay("")
    setReminder(false)
    setText('')

  }
        


 
 

  
  
  return (
    <form className="add-form" onSubmit= {onSubmit}>
      <div className="form-control">
        <label> Task</label>
        <input
          type="text"
          placeholder="AddTask"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label> Day and Time</label>
        <input
          type="text"
          placeholder="AddTask"
          value={day}
          onChange={e => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label> set Remainder</label>
        <input
          type="checkbox"
          checked={reminder}
          onChange={e => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="save task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
