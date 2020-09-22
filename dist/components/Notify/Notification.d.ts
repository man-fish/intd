import React from "react";
import { INoticeProps } from "./Notice";
export interface INotificationProps {
    maxCount?: number;
}
declare class Notification extends React.Component<INotificationProps, {
    notices: INoticeProps[];
}> {
    static defaultProps: {
        maxCount: number;
    };
    constructor(props: INotificationProps);
    addNotice: (notice: INoticeProps) => void;
    removeNotice: (key: string) => void;
    render(): JSX.Element;
}
export default Notification;
