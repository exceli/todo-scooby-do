import { TodoFilterTabs, TodoInput, useFilteredTodos } from "@/features/todo"
import { useTodosContext } from "@/features/todo/model/context/todoContext"
import { TodoList } from "@/widgets/todoList"
import { Box, Container, Typography } from "@mui/material"
import { FC, SyntheticEvent, useState } from "react"

export const MainPage: FC = () => {
    const [tab, setTab] = useState<number>(0)
    const { todos, handleToggle, addTodo, removeTodo } = useTodosContext()
    const filteredTodos = useFilteredTodos(todos, tab)

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setTab(newValue)
    }

    return (
        <Container>
            <Typography variant="h1">todos</Typography>
            <TodoInput onAdd={addTodo} />
            <Box sx={{ width: "100%", backgroundColor: "#333333" }}>
                <TodoList
                    todos={filteredTodos}
                    onToggle={handleToggle}
                    onDelete={removeTodo}
                />
            </Box>
            <TodoFilterTabs value={tab} onChange={handleChange} />
        </Container>
    )
}
