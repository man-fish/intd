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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React from "react";
import ReactDOM from "react-dom";
import Notification from "./Notification";
var placements = ["top-left", "top-right", "bottom-left", "bottom-right"];
var NotificationFactory = /** @class */ (function () {
    function NotificationFactory() {
        var _this = this;
        this.defaultPlacement = "top-right";
        this.genClassName = function (placement) {
            return "y-notification-" + placement;
        };
        this.genNoticeProps = function (option) {
            var direction = "right";
            if (option.placement && option.placement.toString().match("left")) {
                direction = "left";
            }
            var props = {
                noticeId: option.key ? option.key : "",
                description: option.description,
                message: option.message,
                direction: direction,
            };
            if (option.type)
                props.type = option.type;
            if (option.className)
                props.className = option.className;
            if (option.style)
                props.style = option.style;
            if (option.duration)
                props.duration = option.duration;
            if (option.confirmable)
                props.confirmable = option.confirmable;
            props.show = true;
            return props;
        };
        this.getContainer = function (placement) {
            if (_this.notifications[placement] && _this.notifications[placement].div)
                return _this.notifications[placement].div;
            var container = document.createElement("div");
            container.className = _this.genClassName(placement);
            return container;
        };
        this.getNotificationInstance = function (props, callback) {
            return new Promise(function (resolve) {
                var div = props.container || document.createElement("div");
                document.body.appendChild(div);
                var called = false;
                function ref(notification) {
                    if (called)
                        return;
                    called = true;
                    callback({
                        notice: function (noticeProps) {
                            notification.addNotice(noticeProps);
                        },
                        removeNotice: function (key) {
                            notification.removeNotice(key);
                        },
                        destroy: function () {
                            ReactDOM.unmountComponentAtNode(div);
                            div.parentNode && div.parentNode.removeChild(div);
                        },
                        component: notification,
                        container: div,
                    });
                    return;
                }
                ReactDOM.render(React.createElement(Notification, __assign({}, props, { ref: ref })), div);
            });
        };
        this.open = function (option) { return __awaiter(_this, void 0, void 0, function () {
            var placement, curNotification, div_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        placement = option.placement || this.defaultPlacement;
                        curNotification = this.notifications[placement]
                            ? this.notifications[placement].notification
                            : null;
                        if (!curNotification) return [3 /*break*/, 1];
                        curNotification.notice(this.genNoticeProps(option));
                        return [3 /*break*/, 3];
                    case 1:
                        div_1 = this.getContainer(placement);
                        return [4 /*yield*/, this.getNotificationInstance(__assign({ container: div_1 }, option), function (n) {
                                _this.notifications["" + placement] = {
                                    notification: n,
                                    div: div_1,
                                };
                                n.notice(_this.genNoticeProps(option));
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.remove = function (key) {
            placements.forEach(function (placement, idx) {
                var curNotification = _this.notifications[placement]
                    ? _this.notifications[placement].notification
                    : null;
                if (curNotification) {
                    curNotification.removeNotice(key);
                }
            });
        };
        this.destroy = function () {
            placements.forEach(function (placement, idx) {
                var curNotification = _this.notifications[placement]
                    ? _this.notifications[placement].notification
                    : null;
                if (curNotification) {
                    curNotification.destroy();
                }
            });
        };
        this.notifications = {};
    }
    return NotificationFactory;
}());
export default NotificationFactory;
