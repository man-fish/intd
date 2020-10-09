import React, { MouseEvent } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

export interface ModelProps {
    /* 标题 */
    title: string;
    /* 内容 */
    content: string;
    /* 类名 */
    className?: string;
    /* 自定义行内样式 */
    style?: React.CSSProperties;
    /* 可视化 默认是隐藏的 */
    visiable?: boolean;
    /* 回调函数 */
    onOk?: (e: React.MouseEvent) => void;
    /* 回调函数 */
    onCancel?: (e: React.MouseEvent) => void;
}

class Model extends React.Component<ModelProps> {
    static defaultProps = {
        visiable: false,
    };

    render() {
        const {
            title,
            content,
            className,
            style,
            visiable,
            onOk,
            onCancel,
        } = this.props;
        const classes = classNames("y-model", className, {
            "y-model-visiable": !!visiable,
        });
        return (
            <div>
                <div className={classes} style={style} onClick={onCancel}>
                    <div
                        className="y-model-content"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        data-testid="test-model"
                    >
                        <div className="y-model-header">{title}</div>
                        <div className="y-model-body">{content}</div>
                        <div className="y-model-footer">
                            <Button
                                btnType="default"
                                onClick={onCancel}
                                style={{ marginLeft: "10px" }}
                                size="sm"
                            >
                                cancel
                            </Button>
                            <Button btnType="primary" onClick={onOk} size="sm">
                                confirm
                            </Button>
                        </div>
                        <span className="y-model-close" onClick={onCancel}>
                            <Icon icon={faTimes} theme="danger"></Icon>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Model;
