import { Checkbox as MuiCheckbox } from "@mui/material"
import { FC, SyntheticEvent } from "react"

interface CheckboxProps {
    position: "start" | "end"
    checked: boolean
    onClick?: (e: SyntheticEvent) => void
    handleToggle?: () => void
}

export const Checkbox: FC<CheckboxProps> = ({
    position,
    checked,
    onClick,
    handleToggle,
    ...props
}) => {
    return (
        <MuiCheckbox
            edge={position}
            checked={checked}
            onClick={onClick}
            onChange={handleToggle}
            {...props}
        />
    )
}
