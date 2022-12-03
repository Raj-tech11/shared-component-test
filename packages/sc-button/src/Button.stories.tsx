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
import { action } from "@storybook/addon-actions";
import Button from "./Button";

storiesOf("Button", module)
  .add("with text", () => <Button label="Hello Button" />)
  .add("Disabled", () => <Button label="Disabled" disabled />)
  .add("with some emoji", () => (
    <Button label="Hello Button with some emoji">
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
