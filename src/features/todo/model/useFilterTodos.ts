import { TodoType } from '@/entities/todo'

export const useFilteredTodos = (todos: TodoType[], filter: number) => {
    return todos.filter((todo) => {
        if (filter === 1) return !todo.completed
        if (filter === 2) return todo.completed
        return true
    })
}
