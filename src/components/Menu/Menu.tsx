import React, { useState, createContext } from "react";
import classNames from "classnames";

import { MenuItemProps } from "./MenuItem";

type MenuMode = "horizontal" | "vertical";
type SelectCallback = (selectIdx: string) => void;

export interface MenuProps {
    defaultIdx?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
    defaultOpenSubMenus?: string[];
}

interface IMenuContext {
    index: string;
    onSelect?: SelectCallback;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({ index: "0" });
const Menu: React.FC<MenuProps> = (props) => {
    const {
        className,
        mode,
        style,
        children,
        defaultIdx,
        onSelect,
        defaultOpenSubMenus,
    } = props;
    const [curActive, setActive] = useState(defaultIdx);
    const classes = classNames("y-menu", className, {
        "menu-vertical": mode === "vertical",
        "menu-horizontal": mode !== "vertical",
    });

    const handleClick = (index: string) => {
        setActive(index);
        if (onSelect) onSelect(index);
    };

    const passedContext: IMenuContext = {
        index: curActive ? curActive : "0",
        onSelect: handleClick,
        mode,
        defaultOpenSubMenus,
    };

    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childEle = child as React.FunctionComponentElement<
                MenuItemProps
            >;
            const { displayName } = childEle.type;
            if (displayName === "MenuItem" || displayName === "SubMenu") {
                return React.cloneElement(childEle, {
                    index: index.toString(),
                });
            } else {
                console.error(
                    "Warning: Children of Menu must be a MenuItem component"
                );
            }
        });
    };

    return (
        <ul className={classes} style={style} data-testid="test-menu">
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    );
};

Menu.defaultProps = {
    defaultIdx: "0",
    mode: "horizontal",
};

export default Menu;
