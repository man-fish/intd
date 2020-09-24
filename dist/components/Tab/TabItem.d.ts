import React from "react";
export interface TabsItemProps {
    index?: number;
    title: string;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}
declare const TabsItem: React.FC<TabsItemProps>;
export default TabsItem;
