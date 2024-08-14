import { TodoType } from "@/entities/todo"
import { Checkbox } from "@/shared/checkbox"
import { List, ListItem, ListItemText } from "@mui/material"
import { FC } from "react"

interface TodoListProps {
    todos: TodoType[]
    onToggle: (id: number) => void
}

export const TodoList: FC<TodoListProps> = ({ todos, onToggle }) => (
    <List>
        {todos.map((todo) => (
            <ListItem key={todo.id} button onClick={() => onToggle(todo.id)}>
                <Checkbox
                    position="start"
                    checked={todo.completed}
                    handleToggle={() => onToggle(todo.id)}
                />
                <ListItemText primary={todo.text} />
            </ListItem>
        ))}
    </List>
)
