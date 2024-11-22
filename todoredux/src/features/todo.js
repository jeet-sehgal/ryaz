import { createSlice,nanoid } from "@reduxjs/toolkit";

const initalstate= {
    todos : [{text:"hoi",id:"1"}]
}

const todoSlice = createSlice({
    name : 'todo',
    initialState :initalstate,
    reducers:{
        add:(state,action)=>{
            const todo={
                text : action.payload,
                id : nanoid()
            }
            state.todos.push(todo)
        }
    }
})

export const {add} = todoSlice.actions
export default todoSlice.reducer