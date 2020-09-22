import React from "react";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
declare type AnimationName = "zoom-in-top" | "zoom-in-left" | "zoom-in-bottom" | "zoom-in-right";
interface TransationProps {
    animation?: AnimationName;
    wrapper?: boolean;
}
declare type CombinationProps = TransationProps & CSSTransitionProps;
declare const Transation: React.FC<CombinationProps>;
export default Transation;
