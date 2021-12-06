/** @format */
import classes from "./assets/css/courseDateFees.module.css";

function CourseDateFees(props) {
	return (
		<div>
			<h6
				className={
					classes.subhead + " " + classes.mb_4 + " " + classes.course_sub_head
				}>
				<span className={classes.headline}>{props.title}</span>
			</h6>
			<div
				dangerouslySetInnerHTML={{
					__html: props.description,
				}}
			/>
		</div>
	);
}

export default CourseDateFees;
