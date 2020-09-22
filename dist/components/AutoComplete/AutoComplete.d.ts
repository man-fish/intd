import React, { ReactElement } from "react";
import { InputProps } from "../Input/Input";
interface DataSourceObject {
    value: string;
}
export declare type DataObjectSource<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
    fetchSuggestion: (str: string) => DataObjectSource[] | Promise<DataObjectSource[]>;
    onSelect?: (item: string) => void;
    renderOption?: (item: DataObjectSource) => ReactElement;
}
declare const AutoComplete: React.FC<AutoCompleteProps>;
export default AutoComplete;
