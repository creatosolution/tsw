/** @format */
import React from "react";
import classes from "./assets/css/CourseHighlights.module.css";

function CourseHighlight(props) {
	return (
		<>
			<div className={"col-md-2 " + classes.mb_4 + " " + classes.high_img}>
				<img src={props.icon} alt='' />
			</div>
			<div
				className={"col-md-10 " + classes.mt_3 + " " + classes.mb_4}
				dangerouslySetInnerHTML={{
					__html: props.description,
				}}></div>
		</>
	);
}

export default CourseHighlight;
