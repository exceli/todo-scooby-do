import { TodoType } from "@/entities/todo"
import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react"

interface TodoContextType {
    todos: TodoType[]
    handleToggle: (id: number) => void
    addTodo: (text: string) => void
}

const TodoContext = createContext<TodoContextType | undefined>(undefined)

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [todos, setTodos] = useState<TodoType[]>([])

    const initialTodos: TodoType[] = [
        { id: 1, text: "Task 1", completed: false },
        { id: 2, text: "Task 2", completed: true },
        { id: 3, text: "Task 3", completed: false },
    ]

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos")
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos))
        } else {
            setTodos(initialTodos)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

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

    return (
        <TodoContext.Provider value={{ todos, handleToggle, addTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTodosContext = () => {
    const context = useContext(TodoContext)
    if (!context) {
        throw new Error("useTodosContext must be used within a TodoProvider")
    }
    return context
}
