import { act, renderHook } from '@testing-library/react'
import { useTodos } from './useTodo'

describe('useTodos', () => {
    it('должен инициализироваться с задачами по умолчанию', () => {
        const { result } = renderHook(() => useTodos())

        expect(result.current.todos).toHaveLength(3)
        expect(result.current.todos[0].text).toBe('Task 1')
    })

    it('должен переключать состояние выполнения задачи', () => {
        const { result } = renderHook(() => useTodos())

        act(() => {
            result.current.handleToggle(1)
        })

        expect(result.current.todos[0].completed).toBe(true)
    })

    it('должен добавлять новую задачу', () => {
        const { result } = renderHook(() => useTodos())

        act(() => {
            result.current.addTodo('New Task')
        })

        expect(result.current.todos).toHaveLength(4)
        expect(result.current.todos[3].text).toBe('New Task')
        expect(result.current.todos[3].completed).toBe(false)
    })
})
