/** @format */
import classes from "./assets/css/overviewContentlanding.module.css";
function OverviewContentLanding(props) {
	return (
		<div className={classes.content_col}>
			<h4 className={classes.title_s}>{props.title}</h4>
			<div
				dangerouslySetInnerHTML={{
					__html: props.description,
				}}
			/>
		</div>
	);
}

export default OverviewContentLanding;
