import React from "react";
interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}
declare const Button: ({ onClick, children, disabled }: ButtonProps) => JSX.Element;
export default Button;
