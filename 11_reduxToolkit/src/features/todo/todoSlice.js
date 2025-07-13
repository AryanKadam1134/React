import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            task: "hello",
            completed: false
        }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                task: action.payload,
                completed: false,
            }
            state.todos.push(todo)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, task: action.payload.task} : todo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => (todo.id !== action.payload))
        },
        toggleCompleted: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? {...todo, completed: todo.completed} : todo)
        }, 
    }
})

export const { addTodo, updateTodo, deleteTodo, toggleCompleted } = todoSlice.actions;

export default todoSlice.reducer;
