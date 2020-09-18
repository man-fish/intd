import React from "react";
import ReactDOM from "react-dom";

import { INoticeProps, NoticeType, NoticeAnimationDirection } from "./Notice";
import Notification from "./Notification";

export type NotificationPos =
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";

const placements = ["top-left", "top-right", "bottom-left", "bottom-right"];

export interface INotifyConfig {
    key?: string; // key 用于标记 notice，如果没有给这个属性则无法清除。
    message: string; // 消息头
    description: string; // 消息体
    placement?: NotificationPos; // 消息位置
    type?: NoticeType; // 消息类型
    className?: string; // notice 自定义类名
    style?: React.CSSProperties; // 自定义样式
    duration?: number | null; // 显示时间
    confirmable?: boolean; // 确认按钮？
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

class NotificationFactory {
    public notifications: {
        [key: string]: {
            notification: NotificationInstanceCallbackReturn;
            div: HTMLDivElement;
        };
    };
    defaultPlacement: NotificationPos = "top-right";
    constructor() {
        this.notifications = {};
    }
    private genClassName = (placement: NotificationPos) => {
        return `y-notification-${placement}`;
    };
    private genNoticeProps = (option: INotifyConfig): INoticeProps => {
        let direction: NoticeAnimationDirection = "right";
        if (option.placement && option.placement.toString().match("left")) {
            direction = "left";
        }
        let props: INoticeProps = {
            noticeId: option.key ? option.key : "",
            description: option.description,
            message: option.message,
            direction,
        };
        if (option.type) props.type = option.type;
        if (option.className) props.className = option.className;
        if (option.style) props.style = option.style;
        if (option.duration) props.duration = option.duration;
        if (option.confirmable) props.confirmable = option.confirmable;
        props.show = true;
        return props;
    };

    private getContainer = (placement: NotificationPos): HTMLDivElement => {
        if (this.notifications[placement] && this.notifications[placement].div)
            return this.notifications[placement].div;
        const container = document.createElement("div");
        container.className = this.genClassName(placement);
        return container;
    };
    private getNotificationInstance = (
        props: INotificationInstanceProps,
        callback: (n: NotificationInstanceCallbackReturn) => void
    ) => {
        return new Promise((resolve) => {
            const div = props.container || document.createElement("div");
            document.body.appendChild(div);
            let called = false;
            function ref(notification: Notification) {
                if (called) return;
                called = true;
                callback({
                    notice: (noticeProps: INoticeProps) => {
                        notification.addNotice(noticeProps);
                    },
                    removeNotice: (key: string) => {
                        notification.removeNotice(key);
                    },
                    destroy: () => {
                        ReactDOM.unmountComponentAtNode(div);
                        div.parentNode && div.parentNode.removeChild(div);
                    },
                    component: notification,
                    container: div,
                });
                return;
                resolve();
            }
            ReactDOM.render(
                <Notification {...props} ref={ref}></Notification>,
                div
            );
        });
    };
    open = async (option: INotifyConfig) => {
        const placement = option.placement || this.defaultPlacement;
        const curNotification = this.notifications[placement]
            ? this.notifications[placement].notification
            : null;
        if (curNotification) {
            curNotification.notice(this.genNoticeProps(option));
        } else {
            const div = this.getContainer(placement);
            await this.getNotificationInstance(
                { container: div, ...option },
                (n: NotificationInstanceCallbackReturn) => {
                    this.notifications[`${placement}`] = {
                        notification: n,
                        div,
                    };
                    n.notice(this.genNoticeProps(option));
                }
            );
        }
    };
    remove = (key: string) => {
        placements.forEach((placement, idx) => {
            const curNotification = this.notifications[placement]
                ? this.notifications[placement].notification
                : null;
            if (curNotification) {
                curNotification.removeNotice(key);
            }
        });
    };
    destroy = () => {
        placements.forEach((placement, idx) => {
            const curNotification = this.notifications[placement]
                ? this.notifications[placement].notification
                : null;
            if (curNotification) {
                curNotification.destroy();
            }
        });
    };
}

export default NotificationFactory;
