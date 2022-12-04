import React from "react";

interface InputProps {
  children?: React.ReactNode;
  placeholder?: () => void;
  disabled?: boolean;
}

const Input = ({ placeholder, children, disabled }: InputProps) => (
  <>
    <input type="text" value="" />
  </>
);

export default Input;
