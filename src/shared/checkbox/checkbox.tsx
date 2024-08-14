import { Checkbox as MuiCheckbox } from "@mui/material"
import { FC } from "react"

interface CheckboxProps {
    position: "start" | "end"
    checked: boolean
    handleToggle: () => void
}

export const Checkbox: FC<CheckboxProps> = ({
    position,
    checked,
    handleToggle,
    ...props
}) => {
    return (
        <MuiCheckbox
            edge={position}
            checked={checked}
            onChange={handleToggle}
            {...props}
        />
    )
}
