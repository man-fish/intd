import { FC } from "react";
import { MenuProps } from "./Menu";
import { MenuItemProps } from "./MenuItem";
import { SubMenuProps } from "./SubMenu";
export declare type IAggregationMenu = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const AggregationMenu: IAggregationMenu;
export default AggregationMenu;
