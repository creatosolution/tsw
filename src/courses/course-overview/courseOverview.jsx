/** @format */

import classes from "./courseOverview.module.css";

function CourseOverview(props) {
	let title = null;

	if (props.overview.id === "17633" || props.overview.id === "18071") {
		title = "Programme";
	} else {
		title = "Course";
	}

	return (
		<div className={"mt-3 mb-4 " + classes.course_overview_desc}>
			<h2 className={"mb-4 " + classes.subhead}>{title} Overview</h2>
			<p
				dangerouslySetInnerHTML={{
					__html: props.overview.course_overview,
				}}></p>
		</div>
	);
}

export default CourseOverview;
