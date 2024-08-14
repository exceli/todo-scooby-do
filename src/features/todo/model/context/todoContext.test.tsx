import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { TodoProvider, useTodosContext } from "./todoContext"

const TestComponent: React.FC = () => {
    const { todos, handleToggle, addTodo } = useTodosContext()

    return (
        <div>
            <button onClick={() => addTodo("Новая задача")}>
                Добавить задачу
            </button>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <span
                        style={{
                            textDecoration: todo.completed
                                ? "line-through"
                                : "none",
                        }}
                    >
                        {todo.text}
                    </span>
                    <button onClick={() => handleToggle(todo.id)}>
                        Переключить
                    </button>
                </div>
            ))}
        </div>
    )
}

describe("TodoContext", () => {
    it("должен инициализироваться с задачами", () => {
        render(
            <TodoProvider>
                <TestComponent />
            </TodoProvider>
        )

        expect(screen.getByText("Task 1")).toBeInTheDocument()
        expect(screen.getByText("Task 2")).toBeInTheDocument()
        expect(screen.getByText("Task 3")).toBeInTheDocument()
    })

    it("должен добавлять задачу", () => {
        render(
            <TodoProvider>
                <TestComponent />
            </TodoProvider>
        )

        fireEvent.click(screen.getByText("Добавить задачу"))
        expect(screen.getByText("Новая задача")).toBeInTheDocument()
    })

    it("должен переключать задачу", () => {
        render(
            <TodoProvider>
                <TestComponent />
            </TodoProvider>
        )

        const toggleButtons = screen.getAllByText("Переключить")
        fireEvent.click(toggleButtons[0])
    })
})
