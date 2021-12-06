/** @format */

import classes from "./footernavigation.module.css";
import FooterSubmenu from "./footersubmenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function FooterNavigationCourses(props) {
	const [showResults, setShowResults] = useState(false);
	const onClick = () => setShowResults(!showResults);
	let active = "";

	if (showResults) {
		active = classes.active;
	}
	let has_children = null;
	if (props.open || props.soon || props.close) {
		has_children = classes.menu_item_has_children;
	}
	return (
		<li className={classes.menu_item + " " + classes.has_children}>
			<a onClick={onClick}>
				{props.cat_title}{" "}
				{props.open || props.soon || props.close ? (
					<FontAwesomeIcon icon={faChevronDown} key={props.index} />
				) : (
					""
				)}{" "}
			</a>
			{props.open ? (
				<ul className={classes.submenu + " " + active}>
					{props.open.map((detail, index) => {
						return (
							<FooterSubmenu
								key={index}
								title={detail.title}
								id={detail.id}
								status={detail.status}
								slug={detail.slug}
							/>
						);
					})}
				</ul>
			) : (
				""
			)}

			{props.soon ? (
				<ul className={classes.submenu + " " + active}>
					{props.soon.map((detail, index) => {
						return (
							<FooterSubmenu
								key={index}
								title={detail.title}
								id={detail.id}
								status={detail.status}
								slug={detail.slug}
							/>
						);
					})}
				</ul>
			) : (
				""
			)}

			{props.close ? (
				<ul className={classes.submenu + " " + active}>
					{props.close.map((detail, index) => {
						return (
							<FooterSubmenu
								key={index}
								title={detail.title}
								id={detail.id}
								slug={detail.slug}
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

export default FooterNavigationCourses;
