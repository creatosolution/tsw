/** @format */

import classes from "./assets/css/topbarNavigation.module.css";

function TopBarNavigation(props) {
	return (
		<li
			id={"menu-item-" + props.id}
			className={
				classes.top_bar_menu_item +
				" " +
				classes.menu_item_type_post_type +
				" " +
				classes.menu_item_object_page
			}>
			<a href=''>{props.title}</a>
		</li>
	);
}

export default TopBarNavigation;
