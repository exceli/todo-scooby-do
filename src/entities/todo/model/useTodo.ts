import { useState } from 'react'
import { TodoType } from './type'

export const useTodos = () => {
    const [todos, setTodos] = useState<TodoType[]>([
        { id: 1, text: 'Task 1', completed: false },
        { id: 2, text: 'Task 2', completed: true },
        { id: 3, text: 'Task 3', completed: false },
    ])

    const handleToggle = (id: number) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    const addTodo = (text: string) => {
        const newTodo: TodoType = {
            id: todos.length + 1,
            text,
            completed: false,
        }
        setTodos([...todos, newTodo])
    }

    return {
        todos,
        handleToggle,
        addTodo,
    }
}
