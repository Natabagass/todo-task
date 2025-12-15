import React, { type MouseEvent, type ReactNode } from "react";

const Button = ({
    variant,
    onClick,
    disabled,
    className,
    children,
    size,
    id,
    type = "button",
}: {
    variant?: "primary" | "secondary" | "delete" | "edit";
    id?: string;
    onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    type?: "submit" | "button";
    className?: string;
    size?: string;
    padding?: string;
    children?: ReactNode;
}) => {
    return (
        <button
            id={id}
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`btn ${variant || ""} ${size || ""} ${className || ""}`}
        >
            {children}
        </button>
    );
}

export default Button;
