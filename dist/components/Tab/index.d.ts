/// <reference types="react" />
import { TabsProps } from "./Tab";
import { TabsItemProps } from "./TabItem";
declare type IAggregationTab = React.FC<TabsProps> & {
    Item: React.FC<TabsItemProps>;
};
declare const AggregationTab: IAggregationTab;
export default AggregationTab;
