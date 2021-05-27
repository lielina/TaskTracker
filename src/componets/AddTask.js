import { useState } from "react";
import Usedispatch from 'react-redux'
import saveTodo from '../featuers/todoSlice'


const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const [input ,setInput]=useState('')
  const onSubmit = e => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);



   
   };

  
  dispatchEvent(saveTodo({
      id: 1,
      text: "Doctors Appointement",
      day: "Feb 5th at 2:30pm",
      reminder: true
  }))

  
  
  return (
    <form className="add-form" onSubmit={onSubmit}>
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
