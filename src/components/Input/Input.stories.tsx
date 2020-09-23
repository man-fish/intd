import React from "react";
import { storiesOf } from "@storybook/react";

import { Input } from "../../index";

let CopStyle = {
    display: "flex",
    "flex-direction": "column",
    "justify-content": "space-between",
    "align-items": "center",
    width: "400px",
    padding: "40px",
    "box-sizing": "border-box",
};

const defaultInputs = () => (
    <div style={CopStyle}>
        <Input autoFocus></Input>
        <Input autoFocus size="sm" placeholder="sm size input"></Input>
        <Input autoFocus size="lg" placeholder="lg size input"></Input>
    </div>
);

const disableInputs = () => (
    <div style={CopStyle}>
        <Input disabled></Input>
    </div>
);

const iconInputs = () => (
    <div style={CopStyle}>
        <Input icon="cat"></Input>
        <Input icon="dog"></Input>
        <Input icon="video"></Input>
        <Input icon="marker"></Input>
    </div>
);

storiesOf("Input", module)
    .add("default Inputs", defaultInputs)
    .add("disabled Inputs", disableInputs)
    .add("icon Inputs", iconInputs);
