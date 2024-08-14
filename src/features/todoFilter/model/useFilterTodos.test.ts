import { TodoType } from '@/entities/todo'
import { useFilteredTodos } from '@/features/todoFilter/model/useFilterTodos'

describe('useFilteredTodos', () => {
    const todos: TodoType[] = [
        { id: 1, text: 'Задача 1', completed: false },
        { id: 2, text: 'Задача 2', completed: true },
        { id: 3, text: 'Задача 3', completed: false },
    ]

    it('должен возвращать все задачи, когда фильтр равен 0', () => {
        const result = useFilteredTodos(todos, 0)
        expect(result).toHaveLength(3)
        expect(result).toEqual(todos)
    })

    it('должен возвращать только активные задачи, когда фильтр равен 1', () => {
        const result = useFilteredTodos(todos, 1)
        expect(result).toHaveLength(2)
        expect(result).toEqual([
            { id: 1, text: 'Задача 1', completed: false },
            { id: 3, text: 'Задача 3', completed: false },
        ])
    })

    it('должен возвращать только выполненные задачи, когда фильтр равен 2', () => {
        const result = useFilteredTodos(todos, 2)
        expect(result).toHaveLength(1)
        expect(result).toEqual([
            { id: 2, text: 'Задача 2', completed: true },
        ])
    })

    it('должен возвращать все задачи, если фильтр имеет несуществующее значение', () => {
        const result = useFilteredTodos(todos, 3)
        expect(result).toHaveLength(3)
        expect(result).toEqual(todos)
    })
})
