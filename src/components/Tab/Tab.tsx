import React, { useState, createContext } from "react";

import classNames from "classnames";

import { TabsItemProps } from "./TabItem";

type TabsTypes = "basic" | "card";
type SelectCallback = (selectIdx: number) => void;

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

export const TabsContext = createContext<ITabsContext>({ index: 0 });
const Tabs: React.FC<TabsProps> = ({
    defaultIdx,
    style,
    className,
    type,
    children,
    onSelect,
}) => {
    const [curActive, setActive] = useState(defaultIdx);

    const handleSelect = (index: number) => {
        setActive(index);
        if (onSelect) onSelect(index);
    };

    const classes = classNames("y-tabs", className, {
        "tabs-card": type === "card",
    });

    const passedContext: ITabsContext = {
        index: curActive ? curActive : 0,
        type: type,
        onSelect: handleSelect,
    };

    const renderNav = () => {
        return React.Children.map(children, (child, index) => {
            const childEle = child as React.FunctionComponentElement<
                TabsItemProps
            >;

            const { displayName } = childEle.type;
            if (displayName === "TabsItem") {
                const { title } = childEle.props;
                return React.cloneElement(
                    childEle,
                    {
                        index,
                    },
                    <>{title}</>
                );
            } else {
                console.error(
                    "Warning: Children of Tabs must be a TabsItem component"
                );
            }
        });
    };

    const renderContent = () => {
        return React.Children.map(children, (child, index) => {
            const childEle = child as React.FunctionComponentElement<
                TabsItemProps
            >;

            const { displayName } = childEle.type;
            const { children } = childEle.props;
            if (displayName === "TabsItem") {
                if (index === curActive)
                    return React.createElement("div", {
                        children,
                    });
            } else {
                console.error(
                    "Warning: Children of Tabs must be a TabsItem component"
                );
            }
        });
    };

    return (
        <div className={classes} style={style} data-testid="test-tabs">
            <TabsContext.Provider value={passedContext}>
                <div className="tabs-nav">{renderNav()}</div>
                <div className="tabs-content">{renderContent()}</div>
            </TabsContext.Provider>
        </div>
    );
};

Tabs.defaultProps = {
    defaultIdx: 0,
    type: "basic",
};

export default Tabs;
