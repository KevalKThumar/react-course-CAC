import React,{ useContext, createContext } from "react";

export const TodoContext = React.createContext({
    todos: [
        {
            id: 1,
            todo: 'Learn react',
            completed: false,
        },
    ],
    addTodo: (todo) => { },
    updateTodo:(todo,id)=>{},
    deleteTodo:()=>{},
    toggleComplate:(id)=>{}

});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider