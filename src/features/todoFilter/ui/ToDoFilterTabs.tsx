import { AppBar, Tab, Tabs } from "@mui/material"
import { FC, SyntheticEvent } from "react"

interface TodoFilterTabsProps {
    value: number
    onChange: (event: SyntheticEvent, newValue: number) => void
}

export const TodoFilterTabs: FC<TodoFilterTabsProps> = ({
    value,
    onChange,
}) => (
    <AppBar position="static" color="default">
        <Tabs value={value} onChange={onChange} centered>
            <Tab label="All" />
            <Tab label="Active" />
            <Tab label="Completed" />
        </Tabs>
    </AppBar>
)
