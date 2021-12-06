/** @format */
import classes from "./assets/css/overviewContent.module.css";
function OverviewContent(props) {
	let title = null;
	if (props.title) {
		title = (
			<h6 className={"mb-4 " + classes.course_sub_head + " " + classes.subhead}>
				<span className={classes.headline}>{props.title}</span>
			</h6>
		);
	}
	return (
		<div>
			{title}

			<div
				dangerouslySetInnerHTML={{
					__html: props.description,
				}}
			/>
		</div>
	);
}

export default OverviewContent;
