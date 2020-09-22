import React, { ReactElement, useState, useEffect, useRef } from "react";
import classNames from "classnames";
import useDebounce from "../../hooks/useDebounce";
import Input, { InputProps } from "../Input/Input";
import Icon from "../Icon/Icon";
import useClickOutside from "../../hooks/useClickOutside";
import Transation from "../Transation/Transation";

interface DataSourceObject {
    value: string;
}

export type DataObjectSource<T = {}> = T & DataSourceObject;

export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
    fetchSuggestion: (
        str: string
    ) => DataObjectSource[] | Promise<DataObjectSource[]>;
    onSelect?: (item: string) => void;
    renderOption?: (item: DataObjectSource) => ReactElement;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
    value,
    fetchSuggestion,
    onSelect,
    renderOption,
    ...restProps
}) => {
    const [curValue, setValue] = useState(value as string);
    const [curSuggestion, setSuggestion] = useState<DataObjectSource[]>([]);
    const [loading, setLoading] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [curHighlightIdx, setHightlightIdx] = useState(-1);
    const triggerSearch = useRef(false);
    const selfRef = useRef<HTMLDivElement>(null);
    const debounceValue = useDebounce(curValue, 500);
    useClickOutside(selfRef, () => setSuggestion([]));
    useEffect(() => {
        if (debounceValue && triggerSearch.current) {
            setSuggestion([]);
            const results = fetchSuggestion(debounceValue);
            if (results instanceof Promise) {
                setLoading(true);
                results.then((data) => {
                    setLoading(false);
                    setSuggestion(data);
                    if (data.length > 0) {
                        setShowDropdown(true);
                    }
                });
            } else {
                setSuggestion(results);
                setShowDropdown(false);
                if (results.length > 0) {
                    setShowDropdown(true);
                }
            }
        } else {
            setShowDropdown(false);
        }
        setHightlightIdx(-1);
    }, [debounceValue, fetchSuggestion]);
    const highlight = (index: number) => {
        if (index < 0) index = 0;
        if (index >= curSuggestion.length) {
            index = curSuggestion.length - 1;
        }
        setHightlightIdx(index);
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setValue(value);
        triggerSearch.current = true;
    };
    const handleSelect = (item: DataObjectSource) => {
        setValue(item.value);
        setShowDropdown(false);
        triggerSearch.current = false;
        setSuggestion([]);
        onSelect && onSelect(item.value);
    };
    const renderTemplate = (item: DataObjectSource) => {
        return renderOption ? renderOption(item) : item.value;
    };
    const generateDropdown = () => {
        return (
            <Transation
                in={loading || showDropdown}
                timeout={300}
                animation="zoom-in-top"
                onExited={() => {
                    setSuggestion([]);
                }}
            >
                <ul className="y-suggestion-list">
                    {loading && (
                        <div className="suggstions-loading-icon">
                            <Icon icon="spinner" spin />
                        </div>
                    )}
                    {curSuggestion.map((suggest: DataObjectSource, idx) => {
                        const classes = classNames("suggestion-item", {
                            "is-active": idx === curHighlightIdx,
                        });
                        return (
                            <li
                                key={idx}
                                className={classes}
                                onClick={() => handleSelect(suggest)}
                            >
                                {renderTemplate(suggest)}
                            </li>
                        );
                    })}
                </ul>
            </Transation>
        );
    };
    return (
        <div className="y-auto-complete" ref={selfRef}>
            <Input
                value={curValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                {...restProps}
            ></Input>
            {generateDropdown()}
        </div>
    );
};

export default AutoComplete;
