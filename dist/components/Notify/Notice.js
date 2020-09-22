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
import classNames from "classnames";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import Transation from "../Transation/Transation";
var Notice = /** @class */ (function (_super) {
    __extends(Notice, _super);
    function Notice(props) {
        var _this = _super.call(this, props) || this;
        _this.setTimer = function () {
            var _a = _this.props, noticeId = _a.noticeId, duration = _a.duration, onClose = _a.onClose;
            if (duration) {
                _this.timer = setTimeout(function () {
                    onClose && onClose(noticeId);
                }, duration);
            }
        };
        _this.timer = null;
        return _this;
    }
    Notice.prototype.componentDidMount = function () {
        this.setTimer();
    };
    Notice.prototype.componentWillUnmount = function () {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    };
    Notice.prototype.onMouseEnter = function (e) {
        e.preventDefault();
        var duration = this.props.duration;
        if (this.timer || duration) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    };
    Notice.prototype.onMouseLeave = function (e) {
        e.preventDefault();
        this.setTimer();
    };
    Notice.prototype.onMouseClick = function (e) {
        e.preventDefault();
        var _a = this.props, noticeId = _a.noticeId, onClose = _a.onClose;
        onClose && onClose(noticeId);
    };
    Notice.prototype.render = function () {
        var _a;
        var _b = this.props, message = _b.message, description = _b.description, type = _b.type, className = _b.className, style = _b.style, confirmable = _b.confirmable, show = _b.show, direction = _b.direction;
        var classes = classNames("y-notification-notice", className, (_a = {},
            _a["y-notification-notice-" + type] = !!type,
            _a));
        var animationClass = "zoom-in-" + direction;
        return (React.createElement(Transation, { in: show, timeout: 400, classNames: animationClass },
            React.createElement("div", { className: classes, style: style, onMouseEnter: this.onMouseEnter.bind(this), onMouseLeave: this.onMouseLeave.bind(this) },
                React.createElement("div", { className: "y-notification-notice-message" }, message),
                React.createElement("div", { className: "y-notification-notice-description" }, description),
                confirmable && (React.createElement("span", { className: "y-notification-notice-btn" },
                    React.createElement(Button, { size: "sm", btnType: "primary", onClick: this.onMouseClick.bind(this) }, "Confirm"))),
                React.createElement("span", { className: "y-notification-notice-close", onClick: this.onMouseClick.bind(this) },
                    React.createElement(Icon, { icon: faTimes, theme: "danger" })))));
    };
    return Notice;
}(React.Component));
export default Notice;
