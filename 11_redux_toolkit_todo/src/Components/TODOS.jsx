import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../Features/TODOs/TODOsSlice";

const TODOS = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-2xl font-bold mb-4">Todos</div>
      <ul className="grid gap-4">
        {todos.map((todo) => (
          <li
            className="bg-gray-300 p-3 rounded-lg flex items-center justify-between"
            key={todo.id}
          >
            <span className="text-gray-800">{todo.text}</span>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  dispatch(
                    editTodo({
                      id: todo.id,
                      text: todo.text,
                    })
                  );
                }}
                className="w-8 h-8 text-gray-600 hover:bg-gray-200 rounded-full transition duration-200"
              >
                ✏️
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="w-8 h-8 text-gray-600 hover:bg-gray-200 rounded-full transition duration-200"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TODOS;
