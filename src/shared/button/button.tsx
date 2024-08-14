import { Button as ButtonMUI } from "@mui/material"
import { FC, ReactNode } from "react"

interface ButtonProps {
    children?: string | ReactNode
    onClick?: () => void
    variant?: "text" | "outlined" | "contained"
    color?: "inherit" | "primary" | "secondary" | "success" | "error"
    sx?: object
}

export const Button: FC<ButtonProps> = ({
    children,
    onClick,
    variant,
    color,
    sx,
    ...props
}) => {
    return (
        <ButtonMUI
            variant={variant}
            color={color}
            onClick={onClick}
            sx={sx}
            {...props}
        >
            {children}
        </ButtonMUI>
    )
}
