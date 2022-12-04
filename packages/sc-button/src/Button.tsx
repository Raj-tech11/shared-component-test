import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ onClick, children, disabled }: ButtonProps) => (
  <>
    <button disabled={disabled} onClick={onClick}>
      {children || "text"}
    </button>
  </>
);

export default Button;
