import React, { useContext } from "react";
import classNames from "classnames";
import { TabsContext } from "./Tab";
var TabsItem = function (_a) {
    var index = _a.index, disabled = _a.disabled, className = _a.className, style = _a.style, children = _a.children;
    var context = useContext(TabsContext);
    var classes = classNames("tabs-item", className, {
        "is-disabled": disabled,
        "is-active": index === context.index,
    });
    var handleClick = function () {
        if (!disabled && context.onSelect && typeof index === "number") {
            context.onSelect(index);
        }
    };
    return (React.createElement("div", { className: classes, onClick: handleClick, style: style }, children));
};
TabsItem.displayName = "TabsItem";
export default TabsItem;
