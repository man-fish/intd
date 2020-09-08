import React, { InputHTMLAttributes, ReactElement } from "react";
import classNames from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Icon from "../Icon/Icon";

type InputSize = "lg" | "sm";

export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    disable?: boolean;
    size?: InputSize;
    icon?: IconProp;
    prepend?: string | ReactElement;
    append?: string | ReactElement;
}
