import React from "react";
export declare type ButtonSize = "lg" | "sm";
export declare type ButtonType = "primary" | "default" | "danger" | "warning" | "link";
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
declare type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
declare type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
declare const Button: React.FC<ButtonProps>;
export default Button;
