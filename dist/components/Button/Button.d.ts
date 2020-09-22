import React from "react";
export declare type ButtonSize = "lg" | "sm";
export declare type ButtonType = "primary" | "default" | "danger" | "warning" | "link";
interface BaseButtonProps {
    className?: string;
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
