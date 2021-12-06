/** @format */
import classes from "./assets/css/subCourse.module.css";
import {
	BrowserRouter as Router,
	Link,
	Route,
	Routes,
	useParams,
} from "react-router-dom";
function SubCourses(props) {
	let color = null;
	if (props.status === "open") {
		color = classes.color_dark_blue;
	}
	if (props.status === "soon") {
		color = classes.color_orange;
	}
	if (props.status === "close") {
		color = classes.color_red;
	}
	return (
		<li>
			<Link to={"/react/" + props.slug}>
				<p
					dangerouslySetInnerHTML={{
						__html: props.title,
					}}
				/>
			</Link>
			<Link
				to={"/react/" + props.slug}
				className={
					classes.btn + " " + classes.rectangle_white_btn + " " + color
				}>
				{props.status === "open" ? "Admission Open" : ""}
				{props.status === "soon" ? "Coming Soon" : ""}
				{props.status === "close" ? "Admission Close" : ""}
			</Link>
		</li>
	);
}

export default SubCourses;
