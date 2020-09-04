import React from "react";

import Button, { ButtonType, ButtonSize } from "./components/Button/Button";

import "./styles/index.scss";

const App: React.FC = () => {
    let AppStyle = {
        display: "flex",
        "flex-direction": "column",
        "justify-content": "space-between",
        "align-items": "center",
        height: "1000px",
        padding: "40px",
        background: "#1515",
    };
    return (
        <div style={AppStyle}>
            <Button
                size={ButtonSize.Large}
                btnType={ButtonType.Primary}
                autoFocus
            >
                Hello
            </Button>
            <Button
                size={ButtonSize.Small}
                btnType={ButtonType.Warning}
                onClick={(e: any) => {
                    console.log(e);
                }}
            >
                Hello
            </Button>
            <Button size={ButtonSize.Small} btnType={ButtonType.Danger}>
                Hello
            </Button>
            <Button disabled> Hello </Button>
            <Button btnType={ButtonType.Default}> Hello </Button>
            <Button btnType={ButtonType.Primary}> Hello </Button>
            <Button btnType={ButtonType.Link}>Hello</Button>
        </div>
    );
};

export default App;
