import {createContext, useContext} from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "will complete learning react",
            completed: false,
        },
    ],
    addTodo: (todo) => {},
    upgradeTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
});

export const useTodo=()=>{
    return useContext(TodoContext);
}

export const TodoProvider=TodoContext.Provider;
