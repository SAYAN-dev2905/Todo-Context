// import React from 'react'

// const TodoItems = () => {
//   return (
//     <div>TodoItems</div>
//   )
// }

// export default TodoItems

import React from 'react'
import { useTodo } from '../context/TodoContext'

const TodoItems = () => {
    const { todos, upgradeTodo, deleteTodo, toggleTodo } = useTodo()

    return (
        <div className="w-full space-y-3">
            {todos.map((todo) => (
                <div
                    key={todo.id}
                    className={`group flex items-center justify-between gap-3 
                    rounded-xl border px-4 py-3 shadow-sm transition-all duration-200
                    ${
                        todo.completed
                            ? "bg-green-900/20 border-green-500/30"
                            : "bg-white/10 border-white/10 hover:bg-white/15"
                    }`}
                >
                    {/* Left side */}
                    <div className="flex items-center gap-3 min-w-0">

                        {/* Checkbox */}
                        <button
                            onClick={() => toggleTodo(todo.id)}
                            className={`flex h-6 w-6 shrink-0 items-center justify-center 
                            rounded-md border-2 transition-all duration-200
                            ${
                                todo.completed
                                    ? "bg-green-500 border-green-500"
                                    : "border-gray-400 hover:border-green-400"
                            }`}
                        >
                            {todo.completed && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    className="h-4 w-4 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 12l4 4L19 7"
                                    />
                                </svg>
                            )}
                        </button>

                        {/* Todo text */}
                        <span
                            className={`truncate text-base transition-all ${
                                todo.completed
                                    ? "text-gray-500 line-through"
                                    : "text-white"
                            }`}
                        >
                            {todo.todo}
                        </span>
                    </div>

                    {/* Right side buttons */}
                    <div className="flex items-center gap-2 shrink-0">

                        {/* Edit button */}
                        <button
                            onClick={() => {
                                const newTodo = prompt(
                                    "Edit your todo:",
                                    todo.todo
                                )

                                if (newTodo && newTodo.trim()) {
                                    upgradeTodo(todo.id, {
                                        ...todo,
                                        todo: newTodo.trim(),
                                    })
                                }
                            }}
                            title="Edit todo"
                            className="flex h-9 w-9 items-center justify-center
                            rounded-lg bg-blue-500/20 text-blue-400
                            transition-all duration-200
                            hover:bg-blue-500 hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 20h9"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
                                />
                            </svg>
                        </button>

                        {/* Delete button */}
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            title="Delete todo"
                            className="flex h-9 w-9 items-center justify-center
                            rounded-lg bg-red-500/20 text-red-400
                            transition-all duration-200
                            hover:bg-red-500 hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 6h18"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8 6V4h8v2"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 6l-1 14H6L5 6"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10 11v5M14 11v5"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            ))}

            {/* Empty state */}
            {todos.length === 0 && (
                <div className="flex flex-col items-center justify-center py-10 text-gray-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="h-12 w-12 mb-3"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5a3 3 0 016 0"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 13h6M9 17h4"
                        />
                    </svg>

                    <p className="text-sm">No todos yet</p>
                    <p className="text-xs text-gray-500 mt-1">
                        Add your first task above
                    </p>
                </div>
            )}
        </div>
    )
}

export default TodoItems