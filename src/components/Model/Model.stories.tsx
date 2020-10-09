import React from "react";
import { storiesOf } from "@storybook/react";

import { Model, Button } from "../../index";

interface ModelControllerState {
    visiable: boolean;
}

class ModelController extends React.Component<{}, ModelControllerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            visiable: false,
        };
        this.handleCanel = this.handleCanel.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }
    handleShow(e: React.MouseEvent) {
        e.preventDefault();
        this.setState({
            visiable: true,
        });
        console.log("show");
    }
    handleOk(e: React.MouseEvent) {
        e.preventDefault();
        this.setState({
            visiable: false,
        });
        console.log("ok");
    }
    handleCanel(e: React.MouseEvent) {
        e.preventDefault();
        this.setState({
            visiable: false,
        });
    }
    render() {
        return (
            <div>
                <Button onClick={this.handleShow}>显示</Button>
                <Model
                    title="Basic Model"
                    content="something happen"
                    visiable={this.state.visiable}
                    onOk={this.handleOk}
                    onCancel={this.handleCanel}
                ></Model>
            </div>
        );
    }
}

const defaultModel = () => {
    return (
        <div>
            <ModelController></ModelController>
        </div>
    );
};

storiesOf("Model", module).add("default Model", defaultModel);
