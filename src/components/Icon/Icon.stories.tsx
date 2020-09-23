import React from "react";
import { storiesOf } from "@storybook/react";

import { Icon } from "../../index";

let CopStyle = {
    display: "flex",
    "flex-direction": "column",
    "justify-content": "space-between",
    "align-items": "center",
    padding: "40px",
    height: "500px",
    "box-sizing": "border-box",
};

const icons = () => (
    <div style={CopStyle}>
        <Icon theme="primary" icon="cat" size="1x"></Icon>
        <Icon theme="info" icon="cat" size="2x"></Icon>
        <Icon theme="secondary" icon="cat" size="3x"></Icon>
        <Icon theme="success" icon="cat" size="4x"></Icon>
        <Icon theme="warning" icon="cat" size="5x"></Icon>
        <Icon theme="danger" icon="cat" size="6x"></Icon>
    </div>
);

storiesOf("Icon", module).add("default Icons", icons);
