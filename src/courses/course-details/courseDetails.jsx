/** @format */

import CourseDetail from "./courseDetail";
import classes from "./courseDetails.module.css";

function CourseDetails(props) {
	const id = props.details.id;
	return (
		<div className={"col-md-12 mb-3 " + classes.course_det}>
			<div className='row'>
				{props.details.course_details.map((detail, index) => {
					return (
						<CourseDetail
							key={index}
							title={detail.title}
							description={detail.description}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default CourseDetails;
