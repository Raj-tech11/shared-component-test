import React from "react";
const Button = ({ onClick, children, disabled }) => (React.createElement(React.Fragment, null,
    React.createElement("button", { disabled: disabled, onClick: onClick }, children || "textabc")));
export default Button;
//# sourceMappingURL=Button.js.map