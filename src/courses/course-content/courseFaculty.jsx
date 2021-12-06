/** @format */
import classes from "./assets/css/courseFaculty.module.css";

function CourseFaculty(props) {
	return (
		<div className='carousel-item item' key={props.index}>
			<div className='col-md-12'>
				<div className='row'>
					<div className='col-md-5'>
						<div className={classes.f_img}>
							{props.image ? <img src={props.image} alt={props.name} /> : ""}
							<h3>{props.name}</h3>
							<span
								dangerouslySetInnerHTML={{
									__html: props.designation,
								}}
							/>
						</div>
					</div>
					<div className='col-md-7'>
						<p
							className='p-2'
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

export default CourseFaculty;
