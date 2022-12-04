import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
storiesOf("Button", module)
    .add("with text", () => React.createElement(Button, null, "Hello Button"))
    .add("Disabled", () => React.createElement(Button, { disabled: true }, "Disabled"))
    .add("with some emoji", () => (React.createElement(Button, null,
    React.createElement("span", { role: "img", "aria-label": "so cool" }, "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF"))));
//# sourceMappingURL=Button.stories.js.map