import { createSlice } from "@reduxjs/toolkit";

export const todoReducer = createSlice({
    name : 'todo',
    initialState : [{
        loading : false,
        Mytodos : [],
        errors : null
    }],
     reducers : {
        AddTodoRequest : (state , action)=>{
            state.loading = true;
        },
        AddTodoSuccess : (state , action)=>{
            state.Mytodos = action.payload
            // state.loading = false;
            // state.Mytodos.push(action.payload);
            // const oldata = JSON.parse(localStorage.getItem('todos')) || []
            // const newData = [...oldata,...state.Mytodos]
            // localStorage.setItem('todos', JSON.stringify(newData))
        },
        AddTodoFailed : (state , action)=>{
            state.loading = false;
            state.errors = action.errors.message;
        }
    }
})

export const {AddTodoRequest , AddTodoSuccess,AddTodoFailed} = todoReducer.actions;
export default todoReducer.reducer;

