/** @format */
import classes from "./assets/css/courseInfo.module.css";
function CourseInfo(props) {
	return (
		<div
			className='col-md-2 col-lg-2 mb-5 mb-lg-0 px-2 px-lg-0 aos-init aos-animate'
			data-aos='zoom-in'>
			<div className={classes.duration_fees_item}>
				<div className='d-flex align-items-center'>
					<div className='d-lg-none'>
						<img src='images/future.svg' className='d-block d-lg-none' />
					</div>
					<div className={classes.duration_txt}>
						<h3>{props.title}</h3>
						<p
							dangerouslySetInnerHTML={{
								__html: props.description,
							}}></p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CourseInfo;
