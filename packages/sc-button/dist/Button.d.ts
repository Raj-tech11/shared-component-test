import React from "react";
interface ButtonProps {
    label?: string;
    children?: React.ReactNode;
    disabled?: boolean;
}
declare const Button: ({ label, children, disabled }: ButtonProps) => JSX.Element;
export default Button;
