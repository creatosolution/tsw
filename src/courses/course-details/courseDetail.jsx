/** @format */
import classes from "./courseDetail.module.css";

function CourseDetail(props) {
	return (
		<div
			className={
				"col-md-2 mb-2 " +
				classes.course_overview_white_box +
				" " +
				classes.custom_md_2
			}>
			<h5
				className={
					"mt-3 mb-1 " +
					classes.justify_content_center +
					" " +
					classes.text_align_center
				}>
				{props.title}
			</h5>
			<p
				className={classes.justify_content_center}
				dangerouslySetInnerHTML={{
					__html: props.description,
				}}
			/>
		</div>
	);
}

export default CourseDetail;
