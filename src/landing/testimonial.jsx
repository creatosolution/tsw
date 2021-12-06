/** @format */

import classes from "./assets/css/testimonial.module.css";
function Testimonial(props) {
	return (
		<div className='carousel-item'>
			<div className='item'>
				<div className={classes.single_brnds}>
					<div className={classes.left_div}>
						{props.image ? (
							<img src={props.image} alt={props.name} width='80' height='80' />
						) : (
							<img
								src='https://27b65434b1.nxcli.net/wp-content/themes/tsw/images/dummy-img.jpg'
								alt={props.name}
								width='80'
								height='80'
							/>
						)}
					</div>
					<div className={classes.right_div}>
						<h4>
							<b>{props.name}</b>{" "}
							{props.designation
								? "(" + props.designation + ")"
								: " (DGM- Sales Excellence, Strategy & Alliances) "}
						</h4>
						{props.department ? <h4>{props.department}</h4> : ""}
						<p
							dangerouslySetInnerHTML={{
								__html: props.description,
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
