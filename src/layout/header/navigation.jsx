/** @format */
import classes from "./assets/css/navigation.module.css";
import Submenu from "./submenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
function Navigation(props) {
	let has_children = null;
	if (props.parentID !== 0) {
		has_children = classes.menu_item_has_children;
	}
	return (
		<li className={classes.menu_item + " " + has_children}>
			<a href='#' className=''>
				{props.title}{" "}
				{props.submenu ? <FontAwesomeIcon icon={faChevronDown} /> : ""}
			</a>
			{props.submenu ? (
				<ul className={classes.submenu}>
					{props.submenu.map((detail) => {
						return (
							<Submenu
								key={detail.ID}
								title={detail.title}
								id={detail.ID}
								parentId={detail.menu_item_parent}
							/>
						);
					})}
				</ul>
			) : (
				""
			)}
		</li>
	);
}

export default Navigation;
