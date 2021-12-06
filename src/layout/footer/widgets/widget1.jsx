/** @format */
import FooterNavigationCourses from "../footerNavigationCourses";

function Widget1(props) {
	return (
		<div className='col-lg-3 col-md-6'>
			<h6 className='mb-3'>Courses</h6>
			<ul id='menu-academic-partners' className='list-bottom'>
				{props.CoursesList.map((detail, index) => {
					return (
						<FooterNavigationCourses
							key={index}
							cat_title={detail.cat_title}
							open={detail.course_open}
							soon={detail.course_soon}
							close={detail.course_close}
							index={index}
						/>
					);
				})}
			</ul>
		</div>
	);
}

export default Widget1;
