import React, { useContext } from "react";
import classNames from "classnames";

import { TabsContext } from "./Tabs";

export interface TabsItemProps {
    index?: number;
    title: string;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

const TabsItem: React.FC<TabsItemProps> = ({
    index,
    disabled,
    className,
    style,
    children,
}) => {
    const context = useContext(TabsContext);

    const classes = classNames("tabs-item", className, {
        "is-disabled": disabled,
        "is-active": index === context.index,
    });

    const handleClick = () => {
        if (!disabled && context.onSelect && typeof index === "number") {
            context.onSelect(index);
        }
    };

    return (
        <div className={classes} onClick={handleClick} style={style}>
            {children}
        </div>
    );
};

TabsItem.displayName = "TabsItem";

export default TabsItem;
