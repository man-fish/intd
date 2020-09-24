import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome Page", module).add(
    "welcome",
    () => {
        return (
            <div>
                <h1>Welcome to intd components</h1>
                <p>intd components is made just for learn antd.</p>
                <h3>Install</h3>
                <code>npm install intd --save</code>
            </div>
        );
    },
    { info: { disable: true } }
);
