/** @format */
import classes from "./assets/css/browseCourses.module.css";
import SubCourses from "./subCourses";
import { useState } from "react";

function BrowseCourses(props) {
	const [hovered, setHovered] = useState(false);
	const [secondactive, setSecondactive] = useState(true);
	const toggleHover = () => setHovered(!hovered);
	const toggleactive = () => setSecondactive(!secondactive);

	let active = "";
	if (secondactive && props.index === 0) {
		active = classes.active;
	}
	if (hovered) {
		active = classes.active;
	}

	return (
		<li
			className={classes.has_submenu + " " + classes.primary_li + " " + active}
			onMouseEnter={toggleHover}
			onMouseLeave={toggleHover}>
			<a href='#' rel='noopener'>
				{props.cat_title}
			</a>
			<div className={classes.submenu}>
				<ul className={classes.sub_course_list}>
					{props.open
						? props.open.map((detail) => {
								return (
									<SubCourses
										key={detail.ID}
										title={detail.title}
										id={detail.ID}
										status={detail.status}
										slug={detail.slug}
									/>
								);
						  })
						: ""}
					{props.soon
						? props.soon.map((detail) => {
								return (
									<SubCourses
										key={detail.ID}
										title={detail.title}
										id={detail.id}
										status={detail.status}
										slug={detail.slug}
									/>
								);
						  })
						: ""}
					{props.close
						? props.close.map((detail) => {
								return (
									<SubCourses
										key={detail.ID}
										title={detail.title}
										id={detail.ID}
										status={detail.status}
										slug={detail.slug}
									/>
								);
						  })
						: ""}
				</ul>
			</div>
		</li>
	);
}

export default BrowseCourses;
