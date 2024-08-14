import { useTodos } from "@/entities/todo"
import { TodoFilterTabs } from "@/features/todoFilter"
import { useFilteredTodos } from "@/features/todoFilter/model/useFilterTodos"
import { TodoInput } from "@/features/todoInput"
import { TodoList } from "@/widgets/todoList"
import { Box, Container, Typography } from "@mui/material"
import { FC, SyntheticEvent, useState } from "react"

export const MainPage: FC = () => {
    const [tab, setTab] = useState<number>(0)
    const { todos, handleToggle, addTodo } = useTodos()
    const filteredTodos = useFilteredTodos(todos, tab)

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setTab(newValue)
    }

    const handleAddTodo = (text: string) => {
        addTodo(text)
    }

    return (
        <Container>
            <Typography variant="h1">todos</Typography>
            <TodoInput onAdd={handleAddTodo} />
            <Box sx={{ width: "100%", backgroundColor: "gray" }}>
                <TodoList todos={filteredTodos} onToggle={handleToggle} />
            </Box>
            <TodoFilterTabs value={tab} onChange={handleChange} />
        </Container>
    )
}
