import React from "react";
interface InputProps {
    children?: React.ReactNode;
    placeholder?: () => void;
    disabled?: boolean;
}
declare const Input: ({ placeholder, children, disabled }: InputProps) => JSX.Element;
export default Input;
