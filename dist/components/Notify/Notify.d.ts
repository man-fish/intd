import React from "react";
import { INoticeProps, NoticeType } from "./Notice";
import Notification from "./Notification";
export declare type NotificationPos = "top-left" | "top-right" | "bottom-left" | "bottom-right";
export interface INotifyConfig {
    key?: string;
    message: string;
    description: string;
    placement?: NotificationPos;
    type?: NoticeType;
    className?: string;
    style?: React.CSSProperties;
    duration?: number | null;
    confirmable?: boolean;
}
export interface INotificationInstanceProps extends INotifyConfig {
    container: HTMLElement;
}
export interface NotificationInstanceCallbackReturn {
    notice: (noticeProps: INoticeProps) => void;
    removeNotice: (key: string) => void;
    destroy: () => void;
    component: Notification;
    container: HTMLElement;
}
declare class NotificationFactory {
    notifications: {
        [key: string]: {
            notification: NotificationInstanceCallbackReturn;
            div: HTMLDivElement;
        };
    };
    defaultPlacement: NotificationPos;
    constructor();
    private genClassName;
    private genNoticeProps;
    private getContainer;
    private getNotificationInstance;
    open: (option: INotifyConfig) => Promise<void>;
    remove: (key: string) => void;
    destroy: () => void;
}
export default NotificationFactory;
