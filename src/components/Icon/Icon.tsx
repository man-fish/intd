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
    let { className, theme, ...resetProps } = props;
    const classes = classNames("y-icon", className, {
        [`icon-${theme}`]: true,
    });
    return (
        <FontAwesomeIcon className={classes} {...resetProps}></FontAwesomeIcon>
    );
};

export default Icon;
