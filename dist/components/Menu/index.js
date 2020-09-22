import Menu from "./Menu";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";
var TransMenu = Menu;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;
export default TransMenu;
