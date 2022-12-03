// import React from "react";
// import Button from "./Button";
// export default {
//   /* 👇 The title prop is optional.
//    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
//    * to learn how to generate automatic titles
//    */
//   title: "Button",
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: "red" },
//   },
// };
import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
storiesOf("Button", module)
    .add("with text", () => React.createElement(Button, { label: "Hello Button" }))
    .add("Disabled", () => React.createElement(Button, { label: "Disabled", disabled: true }))
    .add("with some emoji", () => (React.createElement(Button, { label: "Hello Button with some emoji" },
    React.createElement("span", { role: "img", "aria-label": "so cool" }, "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF"))));
//# sourceMappingURL=Button.stories.js.map