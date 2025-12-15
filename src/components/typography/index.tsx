import type React from "react";

const Text = ({
    className = "",
    children,
    Type = "span",
    weight = "normal",
    size = "md",
    color = "default",
}: {
    Type?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children: React.ReactNode;
    weight?: "light" | "normal" | "medium" | "semibold" | "bold";
    size?: "sm" | "md" | "lg" | "xl" | "xl2" | "xl3" | "xl4";
    color?: "default" | "gray" | "danger" | "success" | "primary";
}) => {
    return (
        <Type className={`text ${size} ${weight} ${color} ${className}`}>
            {children}
        </Type>
    );
};

export default Text;
