import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "../../index";

const defaultButton = () => (
    <>
        <Button onClick={action("clicked")}> default button </Button>
    </>
);

const buttonWithSize = () => (
    <>
        <Button size="lg"> large button </Button>
        <Button size="sm"> small button </Button>
    </>
);

const buttonWithType = () => (
    <>
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
    </>
);
storiesOf("Button", module)
    .add("default Button", defaultButton)
    .add("different size Buttons", buttonWithSize)
    .add("diffetent type Buttons", buttonWithType);
