import React from "react";
import classNames from "classnames";
import Notice, { INoticeProps } from "./Notice";
import uuid from "../../utils/uuid";

export interface INotificationProps {
    maxCount?: number;
}

class Notification extends React.Component<
    INotificationProps,
    { notices: INoticeProps[] }
> {
    static defaultProps = {
        maxCount: 10,
    };
    constructor(props: INotificationProps) {
        super(props);
        this.state = {
            notices: [],
        };
    }
    addNotice = (notice: INoticeProps) => {
        const key = notice.noticeId ? notice.noticeId : uuid();
        const { maxCount } = this.props;
        this.setState((preState) => {
            let notices = preState.notices;
            let noticeIdx = notices.map((v) => v.noticeId).indexOf(key);
            let updateNotice = notices.slice();
            if (noticeIdx !== -1) {
                updateNotice.splice(noticeIdx, 1, notice);
            } else {
                if (maxCount && maxCount <= notices.length) {
                    updateNotice.shift();
                }
                notice.noticeId = key;
                updateNotice.push(notice);
            }
            return {
                notices: updateNotice,
            };
        });
    };
    removeNotice = (key: string) => {
        this.setState((previousState) => {
            return {
                notices: previousState.notices.map((notice, idx) => {
                    if (notice.noticeId === key) {
                        notice.show = false;
                    }
                    return notice;
                }),
            };
        });
        setTimeout(() => {
            this.setState((previousState) => {
                let notices = previousState.notices.filter((notice, idx) => {
                    return notice.noticeId !== key;
                });

                return {
                    notices,
                };
            });
        }, 500);
    };
    render() {
        const classes = classNames("y-notification");
        const { notices } = this.state;

        return (
            <div className={classes}>
                {notices.map((noticeProps: INoticeProps, idx: number) => {
                    return (
                        <Notice
                            {...noticeProps}
                            onClose={this.removeNotice}
                        ></Notice>
                    );
                })}
            </div>
        );
    }
}

export default Notification;
