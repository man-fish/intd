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
import React from "react";
import classNames from "classnames";
import Notice from "./Notice";
import uuid from "../../utils/uuid";
var Notification = /** @class */ (function (_super) {
    __extends(Notification, _super);
    function Notification(props) {
        var _this = _super.call(this, props) || this;
        _this.addNotice = function (notice) {
            var key = notice.noticeId ? notice.noticeId : uuid();
            var maxCount = _this.props.maxCount;
            _this.setState(function (preState) {
                var notices = preState.notices;
                var noticeIdx = notices.map(function (v) { return v.noticeId; }).indexOf(key);
                var updateNotice = notices.slice();
                if (noticeIdx !== -1) {
                    updateNotice.splice(noticeIdx, 1, notice);
                }
                else {
                    if (maxCount && maxCount <= notices.length) {
                        updateNotice.shift();
                    }
                    notice.noticeId = key;
                    updateNotice.push(notice);
                }
                return {
                    notices: updateNotice,
                };
            });
        };
        _this.removeNotice = function (key) {
            _this.setState(function (previousState) {
                return {
                    notices: previousState.notices.map(function (notice, idx) {
                        if (notice.noticeId === key) {
                            notice.show = false;
                        }
                        return notice;
                    }),
                };
            });
            setTimeout(function () {
                _this.setState(function (previousState) {
                    var notices = previousState.notices.filter(function (notice, idx) {
                        return notice.noticeId !== key;
                    });
                    return {
                        notices: notices,
                    };
                });
            }, 500);
        };
        _this.state = {
            notices: [],
        };
        return _this;
    }
    Notification.prototype.render = function () {
        var _this = this;
        var classes = classNames("y-notification");
        var notices = this.state.notices;
        return (React.createElement("div", { className: classes }, notices.map(function (noticeProps, idx) {
            return (React.createElement(Notice, __assign({}, noticeProps, { onClose: _this.removeNotice })));
        })));
    };
    Notification.defaultProps = {
        maxCount: 10,
    };
    return Notification;
}(React.Component));
export default Notification;
