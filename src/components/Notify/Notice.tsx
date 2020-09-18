import React from "react";
import classNames from "classnames";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import Transation from "../Transation/Transation";

export type NoticeType = "success" | "info" | "warning" | "danger";
export type NoticeAnimationDirection = "left" | "right";

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

class Notice extends React.Component<INoticeProps> {
    timer: NodeJS.Timeout | null;
    constructor(props: INoticeProps) {
        super(props);
        this.timer = null;
    }
    componentDidMount() {
        this.setTimer();
    }
    componentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }
    onMouseEnter(e: React.MouseEvent) {
        e.preventDefault();
        let { duration } = this.props;
        if (this.timer || duration) {
            clearTimeout(this.timer as NodeJS.Timeout);
            this.timer = null;
        }
    }
    onMouseLeave(e: React.MouseEvent) {
        e.preventDefault();
        this.setTimer();
    }
    onMouseClick(e: any) {
        e.preventDefault();
        let { noticeId, onClose } = this.props;
        onClose && onClose(noticeId);
    }
    setTimer = () => {
        let { noticeId, duration, onClose } = this.props;
        if (duration) {
            this.timer = setTimeout(() => {
                onClose && onClose(noticeId);
            }, duration);
        }
    };
    render() {
        const {
            message,
            description,
            type,
            className,
            style,
            confirmable,
            show,
            direction,
        } = this.props;

        const classes = classNames("y-notification-notice", className, {
            [`y-notification-notice-${type}`]: !!type,
        });

        const animationClass = `zoom-in-${direction}`;

        return (
            <Transation in={show} timeout={400} classNames={animationClass}>
                <div
                    className={classes}
                    style={style}
                    onMouseEnter={this.onMouseEnter.bind(this)}
                    onMouseLeave={this.onMouseLeave.bind(this)}
                >
                    <div className="y-notification-notice-message">
                        {message}
                    </div>
                    <div className="y-notification-notice-description">
                        {description}
                    </div>
                    {confirmable && (
                        <span className="y-notification-notice-btn">
                            <Button
                                size="sm"
                                btnType="primary"
                                onClick={this.onMouseClick.bind(this)}
                            >
                                Confirm
                            </Button>
                        </span>
                    )}
                    <span
                        className="y-notification-notice-close"
                        onClick={this.onMouseClick.bind(this)}
                    >
                        <Icon icon={faTimes} theme="danger"></Icon>
                    </span>
                </div>
            </Transation>
        );
    }
}

export default Notice;
