import { FC } from "react";
import Menu, { MenuProps } from "./Menu";
import MenuItem, { MenuItemProps } from "./MenuItem";
import SubMenu, { SubMenuProps } from "./SubMenu";

export type IAggregationMenu = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};

const AggregationMenu = Menu as IAggregationMenu;

AggregationMenu.Item = MenuItem;
AggregationMenu.SubMenu = SubMenu;

export default AggregationMenu;
