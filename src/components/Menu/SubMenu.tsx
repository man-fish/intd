import React, { useState, useContext, FunctionComponentElement } from "react";
import classNames from "classnames";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { MenuContext } from "./Menu";
import { MenuItemProps } from "./MenuItem";

import Icon from "../Icon/Icon";

library.add(fas);

interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({
    index,
    title,
    className,
    children,
}) => {
    const context = useContext(MenuContext);
    const openedSubMenus = context.defaultOpenSubMenus
        ? context.defaultOpenSubMenus
        : [];
    let isOpen =
        context.mode === "vertical" && index
            ? openedSubMenus.includes(index)
            : false;
    const [menuOpen, setOpen] = useState(isOpen);

    const classes = classNames("menu-item submenu-item", className, {
        "is-active": context.index === index,
        "is-opened": menuOpen,
        "is-vertical": context.mode === "vertical",
    });

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setOpen(!menuOpen);
    };

    let timer: any;
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        e.preventDefault();
        clearTimeout(timer);
        timer = setTimeout(() => {
            setOpen(toggle);
        }, 300);
    };
    const mouseEvents =
        context.mode === "vertical" ? { onClick: handleClick } : {};
    const hoverEvents =
        context.mode !== "vertical"
            ? {
                  onMouseOver: (e: React.MouseEvent) => {
                      handleMouse(e, true);
                  },
                  onMouseLeave: (e: React.MouseEvent) => {
                      handleMouse(e, false);
                  },
              }
            : {};
    const renderElement = () => {
        const classes = classNames("y-submenu", {
            "menu-opened": menuOpen,
            "menu-closed": !menuOpen,
        });
        const childrenComponent = React.Children.map(children, (child, i) => {
            let childElement = child as FunctionComponentElement<MenuItemProps>;
            if (childElement.type.displayName === "MenuItem") {
                return React.cloneElement(childElement, {
                    index: `${index}-${i}`,
                });
            } else {
                console.error(
                    "Warning: Children of SubMenu must be a MenuItem component"
                );
            }
        });
        return <ul className={classes}>{childrenComponent}</ul>;
    };

    return (
        <li className={classes} key={index} {...hoverEvents}>
            <div className="submenu-title" {...mouseEvents}>
                {title}{" "}
                <Icon
                    icon={"bowling-ball"}
                    className="arrow-icon"
                    size="1x"
                ></Icon>
            </div>
            {renderElement()}
        </li>
    );
};

SubMenu.displayName = "SubMenu";

export default SubMenu;
