import Menu from "./Menu";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";
var AggregationMenu = Menu;
AggregationMenu.Item = MenuItem;
AggregationMenu.SubMenu = SubMenu;
export default AggregationMenu;
