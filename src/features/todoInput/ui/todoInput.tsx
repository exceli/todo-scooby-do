import { Button } from "@/shared/button"
import { Box, TextField } from "@mui/material"
import { FC, useState } from "react"

interface TodoInputProps {
    onAdd: (text: string) => void
}

export const TodoInput: FC<TodoInputProps> = ({ onAdd }) => {
    const [text, setText] = useState<string>("")

    const handleAdd = () => {
        if (text.trim() !== "") {
            onAdd(text)
            setText("")
        }
    }

    return (
        <Box display="flex" mb={2}>
            <TextField
                fullWidth
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What needs to be done?"
                variant="outlined"
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleAdd}
                sx={{ ml: 2 }}
            >
                Добавить
            </Button>
        </Box>
    )
}
