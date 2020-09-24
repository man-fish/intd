import React from "react";
declare type TabsTypes = "basic" | "card";
declare type SelectCallback = (selectIdx: number) => void;
export interface TabsProps {
    defaultIdx?: number;
    style?: React.CSSProperties;
    className?: string;
    type?: TabsTypes;
    onSelect?: SelectCallback;
}
interface ITabsContext {
    index?: number;
    type?: TabsTypes;
    onSelect?: SelectCallback;
}
export declare const TabsContext: React.Context<ITabsContext>;
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
