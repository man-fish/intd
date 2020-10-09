import React, { RefObject } from "react";
export interface ModelProps {
    title: string;
    content: string;
    className?: string;
    style?: React.CSSProperties;
    visiable?: boolean;
    onOk?: (e: React.MouseEvent) => void;
    onCancel?: (e: React.MouseEvent) => void;
}
declare class Model extends React.Component<ModelProps> {
    modelRef: RefObject<HTMLDivElement>;
    constructor(props: ModelProps);
    render(): JSX.Element;
}
export default Model;
