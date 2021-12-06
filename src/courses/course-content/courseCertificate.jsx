/** @format */
import classes from "./assets/css/courseCertificate.module.css";
function CourseCertificate(props) {
	return (
		<div className={classes.course_certificate}>
			{props.title ? (
				<h6
					className={
						classes.subhead + " " + classes.mb_4 + " " + classes.course_sub_head
					}>
					<span className={classes.headline}>{props.title}</span>
				</h6>
			) : (
				""
			)}
			{props.description ? (
				<p
					dangerouslySetInnerHTML={{
						__html: props.description,
					}}
				/>
			) : (
				""
			)}
			{props.certificate ? (
				<div
					className={"col-md-12 " + classes.text_center + " " + classes.mb_3}>
					<div className={classes.cert_img}>
						<img src={props.certificate} alt={props.title} />
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default CourseCertificate;
