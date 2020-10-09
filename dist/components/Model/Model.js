var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from "react";
import Button from "../Button/Button";
import classNames from "classnames";
var Model = /** @class */ (function (_super) {
    __extends(Model, _super);
    function Model(props) {
        var _this = _super.call(this, props) || this;
        _this.modelRef = React.createRef();
        return _this;
    }
    Model.prototype.render = function () {
        var _a = this.props, title = _a.title, content = _a.content, className = _a.className, style = _a.style, visiable = _a.visiable, onOk = _a.onOk, onCancel = _a.onCancel;
        var classes = classNames("y-model", className, {
            "y-model-visable": !!visiable,
        });
        return (React.createElement("div", { className: classes, style: style, ref: this.modelRef },
            React.createElement("div", { className: "y-model-content" },
                React.createElement("div", { className: "y-model-header" }, title),
                React.createElement("div", { className: "y-model-body" }, content),
                React.createElement("div", { className: "y-model-footer" },
                    React.createElement(Button, { btnType: "primary", onClick: onOk }, "\u786E\u8BA4"),
                    React.createElement(Button, { btnType: "default", onClick: onCancel }, "\u53D6\u6D88")))));
    };
    return Model;
}(React.Component));
export default Model;
