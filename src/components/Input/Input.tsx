import React, { InputHTMLAttributes, ReactElement } from "react";
import classNames from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Icon from "../Icon/Icon";

type InputSize = "lg" | "sm";

export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProp;
    style?: React.CSSProperties;
    prepend?: string | ReactElement;
    append?: string | ReactElement;
}

const Input: React.FC<InputProps> = (props) => {
    // 取出各种属性
    const {
        disabled,
        size,
        icon,
        style,
        prepend,
        append,
        ...restProps
    } = props;

    const classes = classNames("y-input", {
        "is-disabled": disabled,
        [`input-${size}`]: size,
        "input-group": prepend || append,
        "input-group__prepend": !!prepend,
        "input-group__append": !!append,
    });

    return (
        <div className={classes} style={style}>
            {prepend && <div className="y-input-group-prepend">{prepend}</div>}
            {icon && (
                <div className="icon-wrapper">
                    <Icon icon={icon} title={`title-${icon}`} />
                </div>
            )}
            <input
                className="y-input-inner"
                disabled={disabled}
                {...restProps}
            />
            {append && <div className="y-input-group-append">{append}</div>}
        </div>
    );
};
