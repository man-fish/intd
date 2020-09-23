import React from "react";

import classNames from "classnames";

export type ButtonSize = "lg" | "sm";

export type ButtonType = "primary" | "default" | "danger" | "warning" | "link";

export interface BaseButtonProps {
    /**自定义类型 */
    className?: string;
    /**设置 Button 的禁用 */
    disabled?: boolean;
    href?: string;
    size?: ButtonSize;
    btnType?: ButtonType;
    children?: React.ReactNode;
}

type NativeButtonProps = BaseButtonProps &
    React.ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorButtonProps = BaseButtonProps &
    React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
    let {
        btnType,
        size,
        className,
        href,
        disabled,
        children,
        ...restProps
    } = props;
    const classes = classNames("btn", className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        disabled: btnType === "link" && disabled,
    });
    if (btnType === "link" && href) {
        return (
            <a className={classes} href={href} {...restProps}>
                {children}
            </a>
        );
    } else {
        return (
            <button className={classes} disabled={disabled} {...restProps}>
                {children}
            </button>
        );
    }
};

Button.defaultProps = {
    disabled: false,
    btnType: "default",
};

export default Button;
