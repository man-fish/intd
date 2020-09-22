/// <reference types="node" />
import React from "react";
export declare type NoticeType = "success" | "info" | "warning" | "danger";
export declare type NoticeAnimationDirection = "left" | "right";
export interface INoticeProps {
    noticeId: string;
    message: string;
    description: string;
    direction: NoticeAnimationDirection;
    type?: NoticeType;
    className?: string;
    style?: React.CSSProperties;
    duration?: number | null;
    confirmable?: boolean;
    show?: boolean;
    onClose?: (key: string) => void;
}
declare class Notice extends React.Component<INoticeProps> {
    timer: NodeJS.Timeout | null;
    constructor(props: INoticeProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onMouseEnter(e: React.MouseEvent): void;
    onMouseLeave(e: React.MouseEvent): void;
    onMouseClick(e: any): void;
    setTimer: () => void;
    render(): JSX.Element;
}
export default Notice;
