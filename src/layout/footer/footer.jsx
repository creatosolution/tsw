/** @format */
//import classes from "./footer.module.css";
import Copyright from "./copyright";
import FooterMenu from "./footermenu";
function Footer(props) {
	return (
		<footer style={{ clear: "both" }}>
			<FooterMenu CoursesList={props.CoursesList} />
			<Copyright />
		</footer>
	);
}

export default Footer;
