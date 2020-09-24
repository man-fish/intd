import React from "react";
import { storiesOf } from "@storybook/react";

import { Tab } from "../../index";

const defaultTab = () => (
    <>
        <div
            style={{
                width: "500px",
                background: "#fff",
                padding: "20px",
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
    </>
);
const cardTab = () => (
    <>
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
    </>
);

storiesOf("Tab", module)
    .add("default Tab", defaultTab)
    .add("card Tab", cardTab);
