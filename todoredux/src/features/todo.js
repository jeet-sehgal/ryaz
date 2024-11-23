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
            state.todos.unshift(todo)
        },
        reduce:(state,action)=>{
            state.todos=state.todos.filter(ele=>ele.id!=action.payload)
        }
    }
})

export const {add,reduce} = todoSlice.actions
export default todoSlice.reducer