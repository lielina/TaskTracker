import { createSlice } from '@reduxjs/toolkit'
import useState from 'react'
  //const [todolist, setTodolist]=useState([])

const initialState = {
    todolist:[]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodos:( state, action)=> {
        state.todolist.push(action.payload)
    
    }
    }
});

export const 
{saveTodos}
 = todoSlice.actions
export default todoSlice.reducer