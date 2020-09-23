import React from "react";
import { storiesOf } from "@storybook/react";

import { Button, Notify } from "../../index";
const notify = new Notify();

const defaultNotify = () => {
    return (
        <div>
            <Button
                size="sm"
                btnType="danger"
                onClick={async () => {
                    await notify.open({
                        // key: "fuck",
                        message: "forever notification",
                        description:
                            "this is a notification which will exist forever.1",
                    });
                }}
            >
                notification
            </Button>
        </div>
    );
};

class LeaveComponet extends React.Component {
    componentWillUnmount() {
        notify.destroy();
    }
    render() {
        return <></>;
    }
}

const otherNotify = () => {
    notify.open({
        message: "4s notification",
        description: "this is a notification which will exist for 4s.",
        duration: 4000,
        placement: "top-left",
    });
    notify.open({
        message: "notification",
        description: "this is a notification which has a button inside.",
        confirmable: true,
        placement: "bottom-left",
    });
    return (
        <>
            <LeaveComponet></LeaveComponet>
        </>
    );
};

storiesOf("Notify", module)
    .add("default Notify", defaultNotify)
    .add("other Notiy", otherNotify);
