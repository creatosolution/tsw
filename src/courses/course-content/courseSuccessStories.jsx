/** @format */
import classes from "./assets/css/courseFaculty.module.css";

function CourseSuccessStories(props) {
	console.log(props);
	return (
		<div className='carousel-item'>
			<div className='col-md-12'>
				<div className='row'>
					<div className='col-md-5'>
						<div className={classes.f_img}>
							{props.image ? (
								<img src={props.image.url} alt={props.name} />
							) : (
								<img
									src='https://27b65434b1.nxcli.net/wp-content/themes/tsw/images/dummy-img.jpg'
									alt={props.name}
								/>
							)}

							<h3>{props.name}</h3>
							<span>{props.designation}</span>
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

export default CourseSuccessStories;
