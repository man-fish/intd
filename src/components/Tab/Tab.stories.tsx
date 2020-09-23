import React from "react";
import { storiesOf } from "@storybook/react";

import { Tab } from "../../index";

let CopStyle = {
    display: "flex",
    "flex-direction": "column",
    "justify-content": "space-between",
    "align-items": "center",
    padding: "40px",
    "box-sizing": "border-box",
};

const defaultTab = () => (
    <div style={CopStyle}>
        <div
            style={{
                width: "500px",
                background: "#f1f1f1",
                padding: "20px 20px 20px 20px",
                boxSizing: "border-box",
            }}
        >
            <Tab
                onSelect={(idx: number) => {
                    console.log(idx);
                }}
            >
                <Tab.Item title={"Tab 1"}>
                    <p>this is the panel for foo</p>
                </Tab.Item>
                <Tab.Item title={"Tab 2"}>
                    <p>this is the panel for bar</p>
                </Tab.Item>
                <Tab.Item title={"Tab 3"} disabled>
                    <p>this is the panel is disabled</p>
                </Tab.Item>
            </Tab>
        </div>
    </div>
);
const cardTab = () => (
    <div style={CopStyle}>
        <div
            style={{
                width: "500px",
                background: "#f1f1f1",
                padding: "20px 20px 20px 20px",
                boxSizing: "border-box",
            }}
        >
            <Tab
                onSelect={(idx: number) => {
                    console.log(idx);
                }}
                type="card"
            >
                <Tab.Item title={"Tab Card 1"}>
                    <p>this is the panel for foo</p>
                </Tab.Item>
                <Tab.Item title={"Tab Card 2"}>
                    <p>this is the panel for bar</p>
                </Tab.Item>
                <Tab.Item title={"Tab Card 3"} disabled>
                    <p>this is the panel is disabled</p>
                </Tab.Item>
            </Tab>
        </div>
    </div>
);

storiesOf("Tab", module)
    .add("default Tab", defaultTab)
    .add("card Tab", cardTab);
