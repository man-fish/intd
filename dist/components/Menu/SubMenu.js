var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState, useContext } from "react";
import classNames from "classnames";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { MenuContext } from "./Menu";
import Icon from "../Icon/Icon";
library.add(fas);
var SubMenu = function (_a) {
    var index = _a.index, title = _a.title, className = _a.className, children = _a.children;
    var context = useContext(MenuContext);
    var openedSubMenus = context.defaultOpenSubMenus
        ? context.defaultOpenSubMenus
        : [];
    var isOpen = context.mode === "vertical" && index
        ? openedSubMenus.includes(index)
        : false;
    var _b = useState(isOpen), menuOpen = _b[0], setOpen = _b[1];
    var classes = classNames("menu-item submenu-item", className, {
        "is-active": context.index === index,
        "is-opened": menuOpen,
        "is-vertical": context.mode === "vertical",
    });
    var handleClick = function (e) {
        e.preventDefault();
        setOpen(!menuOpen);
    };
    var timer;
    var handleMouse = function (e, toggle) {
        e.preventDefault();
        clearTimeout(timer);
        timer = setTimeout(function () {
            setOpen(toggle);
        }, 300);
    };
    var mouseEvents = context.mode === "vertical" ? { onClick: handleClick } : {};
    var hoverEvents = context.mode !== "vertical"
        ? {
            onMouseOver: function (e) {
                handleMouse(e, true);
            },
            onMouseLeave: function (e) {
                handleMouse(e, false);
            },
        }
        : {};
    var renderElement = function () {
        var classes = classNames("y-submenu", {
            "menu-opened": menuOpen,
            "menu-closed": !menuOpen,
        });
        var childrenComponent = React.Children.map(children, function (child, i) {
            var childElement = child;
            if (childElement.type.displayName === "MenuItem") {
                return React.cloneElement(childElement, {
                    index: index + "-" + i,
                });
            }
            else {
                console.error("Warning: Children of SubMenu must be a MenuItem component");
            }
        });
        return React.createElement("ul", { className: classes }, childrenComponent);
    };
    return (React.createElement("li", __assign({ className: classes, key: index }, hoverEvents),
        React.createElement("div", __assign({ className: "submenu-title" }, mouseEvents),
            title,
            " ",
            React.createElement(Icon, { icon: "bowling-ball", className: "arrow-icon", size: "1x" })),
        renderElement()));
};
SubMenu.displayName = "SubMenu";
export default SubMenu;
