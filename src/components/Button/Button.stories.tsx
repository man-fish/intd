import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "../../index";

let CopStyle = {
    display: "flex",
    "flex-direction": "column",
    "justify-content": "space-between",
    "align-items": "center",
    padding: "40px",
    "box-sizing": "border-box",
};

const defaultButton = () => (
    <div style={Object.assign({}, CopStyle)}>
        <Button onClick={action("clicked")}> default button </Button>
    </div>
);

const buttonWithSize = () => (
    <div style={Object.assign({}, CopStyle, { height: "200px" })}>
        <Button size="lg"> large button </Button>
        <Button size="sm"> small button </Button>
    </div>
);

const buttonWithType = () => (
    <div style={Object.assign({}, CopStyle, { height: "500px" })}>
        <Button size="lg" btnType="default" autoFocus>
            Default Hello
        </Button>
        <Button
            size="sm"
            btnType="warning"
            onClick={(e: any) => {
                console.log(e);
            }}
        >
            Warning Hello
        </Button>
        <Button
            size="sm"
            btnType="danger"
            onClick={() => console.log("clicked")}
        >
            Danger Hello
        </Button>
        <Button disabled> Disabled Hello </Button>
        <Button btnType="default"> Default Hello </Button>
        <Button btnType="primary"> Primary Hello </Button>
        <Button btnType="link">Link Hello</Button>
        <Button btnType="link" disabled>
            Disable Link Hello
        </Button>
    </div>
);
storiesOf("Button", module)
    .add("default Button", defaultButton)
    .add("different size Buttons", buttonWithSize)
    .add("diffetent type Buttons", buttonWithType);
