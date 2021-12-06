/** @format */
import classes from "./assets/css/landingHighlights.module.css";
function LandingHighlights(props) {
	return (
		<div className={"col-6 col-md-4 " + classes.highlight_item}>
			<figure>
				<img src={props.icon} alt='Programme highlights' />
			</figure>
			<p>{props.title}</p>
		</div>
	);
}

export default LandingHighlights;
