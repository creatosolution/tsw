/** @format */
import classes from "./assets/css/courseAccrodian.module.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "react-bootstrap";
function CourseAccordian(props) {
	return (
		<Accordion flush>
			<Accordion.Item eventKey={props.id} flush>
				<Accordion.Header
					flush
					className={
						classes.d_flex +
						" " +
						classes.grey_box +
						" " +
						classes.justify_content_between +
						" " +
						classes.p_2 +
						" " +
						classes.mb_2 +
						" " +
						classes.acc_cont
					}>
					<p className={classes.text_dark + " " + classes.ml_s_0}>
						{props.title}
					</p>
				</Accordion.Header>
				<Accordion.Body>
					<div
						id={"demo" + props.id}
						className={
							classes.collapse +
							" " +
							classes.p_2 +
							" " +
							classes.mb_2 +
							" " +
							classes.content_accordian
						}
						dangerouslySetInnerHTML={{
							__html: props.description,
						}}></div>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}

export default CourseAccordian;
