import { TodoType } from "@/entities/todo"
import { Checkbox } from "@/shared/checkbox"
import DeleteIcon from "@mui/icons-material/Delete"
import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material"
import { FC } from "react"

interface TodoListProps {
    todos: TodoType[]
    onToggle: (id: number) => void
    onDelete: (id: number) => void
}

export const TodoList: FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
    return (
        <List>
            {todos.map((todo) => (
                <ListItem
                    key={todo.id}
                    button
                    onClick={() => onToggle(todo.id)}
                    sx={{
                        position: "relative",
                        "&:hover .delete-button": {
                            opacity: 1,
                            visibility: "visible",
                        },
                    }}
                >
                    <Checkbox
                        position="start"
                        checked={todo.completed}
                        onClick={(e) => e.stopPropagation()}
                        handleToggle={() => onToggle(todo.id)}
                    />
                    <ListItemText primary={todo.text} />
                    <Box
                        className="delete-button"
                        sx={{
                            position: "absolute",
                            right: 0,
                            opacity: 0,
                            visibility: "hidden",
                            transition: "opacity 0.3s, visibility 0.3s",
                        }}
                    >
                        <IconButton
                            onClick={(e) => {
                                e.stopPropagation()
                                onDelete(todo.id)
                            }}
                        >
                            <DeleteIcon color="error" />
                        </IconButton>
                    </Box>
                </ListItem>
            ))}
        </List>
    )
}
