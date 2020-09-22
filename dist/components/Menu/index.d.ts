import { FC } from "react";
import { MenuProps } from "./Menu";
import { MenuItemProps } from "./MenuItem";
import { SubMenuProps } from "./SubMenu";
export declare type MenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransMenu: MenuComponent;
export default TransMenu;
