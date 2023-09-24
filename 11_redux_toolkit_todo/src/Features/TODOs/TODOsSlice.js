import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [
       
    ],
    edit: {
        id: null,
        text: null
    }
}



export const todoSlice = createSlice(
    {
        name: "todos",
        initialState,
        reducers: {
            addTodo: (state, action) => {
                const todo = {
                    id: nanoid(),
                    text: action.payload,
                }
                state.todos.push(todo)


            },
            removeTodo: (state, action) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            },

            updateTodo: (state, action) => {
                state.todos = state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        todo.text = action.payload.text
                    }
                    return todo
                })
                state.edit = {
                    id: null,
                    text: null
                }
            },

            editTodo: (state, action) => {
                state.edit = action.payload
            }

        }
    }
)

export const { addTodo, removeTodo, updateTodo, editTodo} = todoSlice.actions

export default todoSlice.reducer