import React from "react";
import classNames from "classnames";
import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

type ThemeProps =
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger";

interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
    let { className, theme, ...restProps } = props;
    const classes = classNames("y-icon", className, {
        [`icon-${theme}`]: true,
    });
    return (
        <FontAwesomeIcon className={classes} {...restProps}></FontAwesomeIcon>
    );
};

export default Icon;
