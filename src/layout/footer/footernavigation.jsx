/** @format */
/** @format */
import classes from "./footernavigation.module.css";
import FooterSubmenu from "./footersubmenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function FooterNavigation(props) {
	const [showResults, setShowResults] = useState(false);
	const onClick = () => setShowResults((prevCheck) => !prevCheck);

	let has_children = null;
	if (props.parentID !== 0) {
		has_children = classes.menu_item_has_children;
	}
	return (
		<li className={classes.menu_item + " " + has_children}>
			<a>
				{props.title}{" "}
				{props.submenu ? (
					<FontAwesomeIcon icon={faChevronDown} onClick={onClick} />
				) : (
					""
				)}
			</a>
			{showResults
				? [
						props.submenu ? (
							<ul className={classes.submenu}>
								{props.submenu.map((detail) => {
									return (
										<FooterSubmenu
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
						),
				  ]
				: ""}
		</li>
	);
}

export default FooterNavigation;
