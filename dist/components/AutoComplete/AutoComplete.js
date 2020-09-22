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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import useDebounce from "../../hooks/useDebounce";
import Input from "../Input/Input";
import Icon from "../Icon/Icon";
import useClickOutside from "../../hooks/useClickOutside";
import Transation from "../Transation/Transation";
var AutoComplete = function (_a) {
    var value = _a.value, fetchSuggestion = _a.fetchSuggestion, onSelect = _a.onSelect, renderOption = _a.renderOption, restProps = __rest(_a, ["value", "fetchSuggestion", "onSelect", "renderOption"]);
    var _b = useState(value), curValue = _b[0], setValue = _b[1];
    var _c = useState([]), curSuggestion = _c[0], setSuggestion = _c[1];
    var _d = useState(false), loading = _d[0], setLoading = _d[1];
    var _e = useState(false), showDropdown = _e[0], setShowDropdown = _e[1];
    var _f = useState(-1), curHighlightIdx = _f[0], setHightlightIdx = _f[1];
    var triggerSearch = useRef(false);
    var selfRef = useRef(null);
    var debounceValue = useDebounce(curValue, 500);
    useClickOutside(selfRef, function () { return setSuggestion([]); });
    useEffect(function () {
        if (debounceValue && triggerSearch.current) {
            setSuggestion([]);
            var results = fetchSuggestion(debounceValue);
            if (results instanceof Promise) {
                setLoading(true);
                results.then(function (data) {
                    setLoading(false);
                    setSuggestion(data);
                    if (data.length > 0) {
                        setShowDropdown(true);
                    }
                });
            }
            else {
                setSuggestion(results);
                setShowDropdown(false);
                if (results.length > 0) {
                    setShowDropdown(true);
                }
            }
        }
        else {
            setShowDropdown(false);
        }
        setHightlightIdx(-1);
    }, [debounceValue, fetchSuggestion]);
    var highlight = function (index) {
        if (index < 0)
            index = 0;
        if (index >= curSuggestion.length) {
            index = curSuggestion.length - 1;
        }
        setHightlightIdx(index);
    };
    var handleKeyDown = function (e) {
        switch (e.keyCode) {
            case 13:
                if (curSuggestion[curHighlightIdx]) {
                    handleSelect(curSuggestion[curHighlightIdx]);
                }
                break;
            case 38:
                highlight(curHighlightIdx - 1);
                break;
            case 40:
                highlight(curHighlightIdx + 1);
                break;
            case 27:
                setShowDropdown(false);
                break;
            default:
                break;
        }
    };
    var handleChange = function (e) {
        var value = e.target.value.trim();
        setValue(value);
        triggerSearch.current = true;
    };
    var handleSelect = function (item) {
        setValue(item.value);
        setShowDropdown(false);
        triggerSearch.current = false;
        setSuggestion([]);
        onSelect && onSelect(item.value);
    };
    var renderTemplate = function (item) {
        return renderOption ? renderOption(item) : item.value;
    };
    var generateDropdown = function () {
        return (React.createElement(Transation, { in: loading || showDropdown, timeout: 300, animation: "zoom-in-top", onExited: function () {
                setSuggestion([]);
            } },
            React.createElement("ul", { className: "y-suggestion-list" },
                loading && (React.createElement("div", { className: "suggstions-loading-icon" },
                    React.createElement(Icon, { icon: "spinner", spin: true }))),
                curSuggestion.map(function (suggest, idx) {
                    var classes = classNames("suggestion-item", {
                        "is-active": idx === curHighlightIdx,
                    });
                    return (React.createElement("li", { key: idx, className: classes, onClick: function () { return handleSelect(suggest); } }, renderTemplate(suggest)));
                }))));
    };
    return (React.createElement("div", { className: "y-auto-complete", ref: selfRef },
        React.createElement(Input, __assign({ value: curValue, onChange: handleChange, onKeyDown: handleKeyDown }, restProps)),
        generateDropdown()));
};
export default AutoComplete;
