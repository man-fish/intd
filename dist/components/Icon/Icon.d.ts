import React from "react";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
declare type ThemeProps = "primary" | "secondary" | "success" | "info" | "warning" | "danger";
interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
