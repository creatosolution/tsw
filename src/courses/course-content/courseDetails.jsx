/** @format */
import classes from "./assets/css/courseDetails.module.css";
function CourseDetails(props) {
	return (
		<div className={classes.course_details}>
			<h6
				className={
					classes.subhead + " " + classes.mb_4 + " " + classes.course_sub_head
				}>
				<span className={classes.headline}>{props.title}</span>
			</h6>
			<p
				dangerouslySetInnerHTML={{
					__html: props.description,
				}}
			/>
		</div>
	);
}

export default CourseDetails;
