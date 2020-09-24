import React, { useState, createContext } from "react";
import classNames from "classnames";
export var TabsContext = createContext({ index: 0 });
var Tabs = function (_a) {
    var defaultIdx = _a.defaultIdx, style = _a.style, className = _a.className, type = _a.type, children = _a.children, onSelect = _a.onSelect;
    var _b = useState(defaultIdx), curActive = _b[0], setActive = _b[1];
    var handleSelect = function (index) {
        setActive(index);
        if (onSelect)
            onSelect(index);
    };
    var classes = classNames("y-tabs", className, {
        "tabs-card": type === "card",
    });
    var passedContext = {
        index: curActive ? curActive : 0,
        type: type,
        onSelect: handleSelect,
    };
    var renderNav = function () {
        return React.Children.map(children, function (child, index) {
            var childEle = child;
            var displayName = childEle.type.displayName;
            if (displayName === "TabsItem") {
                var title = childEle.props.title;
                return React.cloneElement(childEle, {
                    index: index,
                }, React.createElement(React.Fragment, null, title));
            }
            else {
                console.error("Warning: Children of Tabs must be a TabsItem component");
            }
        });
    };
    var renderContent = function () {
        return React.Children.map(children, function (child, index) {
            var childEle = child;
            var displayName = childEle.type.displayName;
            var children = childEle.props.children;
            if (displayName === "TabsItem") {
                if (index === curActive)
                    return React.createElement("div", {
                        children: children,
                    });
            }
            else {
                console.error("Warning: Children of Tabs must be a TabsItem component");
            }
        });
    };
    return (React.createElement("div", { className: classes, style: style, "data-testid": "test-tabs" },
        React.createElement(TabsContext.Provider, { value: passedContext },
            React.createElement("div", { className: "tabs-nav" }, renderNav()),
            React.createElement("div", { className: "tabs-content" }, renderContent()))));
};
Tabs.defaultProps = {
    defaultIdx: 0,
    type: "basic",
};
export default Tabs;
