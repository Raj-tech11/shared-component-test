//import { PrimaryButton } from "@fluentui/react";
import React from "react";

interface ButtonProps {
  label?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ label, children, disabled }: ButtonProps) => (
  <>
    <button>{children}</button>
    {/* <PrimaryButton disabled={disabled} text={label}>
      {children}
    </PrimaryButton> */}
  </>
);

export default Button;
