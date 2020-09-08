import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Button from "./components/Button/Button";
import Menu, { MenuProps } from "./components/Menu/Menu";
import SubMenu from "./components/Menu/SubMenu";
import MenuItem from "./components/Menu/MenuItem";
import Icon from "./components/Icon/Icon";
import Tabs from "./components/Tabs/Tabs";
import TabsItem from "./components/Tabs/TabsItem";

import "./styles/index.scss";

library.add(fas);

const testProps: MenuProps = {
    defaultIdx: "0",
    className: "foo",
    onSelect: (index) => console.log(index),
};

const App: React.FC = () => {
    let AppStyle = {
        display: "flex",
        "flex-direction": "row",
        "justify-content": "flex-start",
        "align-items": "flex-start",
        width: "100%",
        height: "1000px",
        padding: "40px",
        background: "#f0f0f0",
    };
    let CopStyle = {
        display: "flex",
        "flex-direction": "column",
        "justify-content": "space-between",
        "align-items": "center",
        padding: "40px",
        "box-sizing": "border-box",
    };
    return (
        <div style={AppStyle}>
            <div style={CopStyle}>
                <Menu {...testProps}>
                    <MenuItem>MenuItem default</MenuItem>
                    <MenuItem disabled>MenuItem disabled</MenuItem>
                    <SubMenu title={"SubMenu1"}>
                        <MenuItem>SubMenu-item-1</MenuItem>
                        <MenuItem>SubMenu-item-2</MenuItem>
                    </SubMenu>
                    <MenuItem>MenuItem common</MenuItem>
                </Menu>
                <Menu {...testProps} mode="vertical">
                    <MenuItem>MenuItem default</MenuItem>
                    <MenuItem disabled>MenuItem disabled</MenuItem>
                    <SubMenu title={"SubMenu1"}>
                        <MenuItem>SubMenu-item-1</MenuItem>
                        <MenuItem>SubMenu-item-2</MenuItem>
                    </SubMenu>
                    <MenuItem>MenuItem common</MenuItem>
                </Menu>
            </div>
            <div style={Object.assign({}, CopStyle, { height: "500px" })}>
                <Button size="lg" btnType="default" autoFocus>
                    Hello
                </Button>
                <Button
                    size="sm"
                    btnType="warning"
                    onClick={(e: any) => {
                        console.log(e);
                    }}
                >
                    Hello
                </Button>
                <Button size="sm" btnType="danger">
                    Hello
                </Button>
                <Button disabled> Hello </Button>
                <Button btnType="default"> Hello </Button>
                <Button btnType="primary"> Hello </Button>
                <Button btnType="link">Hello</Button>
                <Button btnType="link" disabled>
                    Hello
                </Button>
            </div>
            <div style={Object.assign({}, CopStyle, { height: "500px" })}>
                <Icon theme="primary" icon="cat" size="3x"></Icon>
                <Icon theme="info" icon="cat" size="3x"></Icon>
                <Icon theme="secondary" icon="cat" size="3x"></Icon>
                <Icon theme="success" icon="cat" size="3x"></Icon>
                <Icon theme="warning" icon="cat" size="3x"></Icon>
                <Icon theme="danger" icon="cat" size="3x"></Icon>
            </div>
            <div style={CopStyle}>
                <div
                    style={{
                        width: "500px",
                        background: "#FFF",
                        padding: "0px 20px",
                        boxSizing: "border-box",
                    }}
                >
                    <Tabs
                        onSelect={(idx: number) => {
                            console.log(idx);
                        }}
                    >
                        <TabsItem title={"Tab 1"}>
                            <p>this is the panel for foo</p>
                        </TabsItem>
                        <TabsItem title={"Tab 2"}>
                            <p>this is the panel for bar</p>
                        </TabsItem>
                        <TabsItem title={"Tab 3"} disabled>
                            <p>this is the panel is disabled</p>
                        </TabsItem>
                    </Tabs>
                </div>
                <div
                    style={{
                        width: "500px",
                        background: "#f5f5f5",
                        padding: "20px 20px",
                        marginTop: "20px",
                        boxSizing: "border-box",
                    }}
                >
                    <Tabs
                        onSelect={(idx: number) => {
                            console.log(idx);
                        }}
                        type="card"
                    >
                        <TabsItem title={"Tab Card 1"}>
                            <p>this is the panel for foo</p>
                        </TabsItem>
                        <TabsItem title={"Tab Card 2"}>
                            <p>this is the panel for bar</p>
                        </TabsItem>
                        <TabsItem title={"Tab Card 3"} disabled>
                            <p>this is the panel is disabled</p>
                        </TabsItem>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default App;
