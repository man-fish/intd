import Tab, { TabsProps } from "./Tab";
import TabItem, { TabsItemProps } from "./TabItem";

type IAggregationTab = React.FC<TabsProps> & {
    Item: React.FC<TabsItemProps>;
};

const AggregationTab = Tab as IAggregationTab;
AggregationTab.Item = TabItem;

export default AggregationTab;
