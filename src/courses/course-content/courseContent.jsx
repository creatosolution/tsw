/** @format */
import classes from "./assets/css/courseContent.module.css";
import OverviewContent from "./overviewContent";
import CourseAccordian from "./courseAccordian";
import CourseHighlight from "./CourseHighlight";
import CourseDetails from "./courseDetails";
import CourseCertificate from "./courseCertificate";
import CourseDateFees from "./courseDateFees";
import CourseFaculty from "./courseFaculty";
import CourseSuccessStories from "./courseSuccessStories";
import CourseForm from "./courseForm.jsx";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Owl.css";

function CourseContent(props) {
	let description = null;
	if (props.content.accordian_description) {
		description = <p>{props.content.accordian_description}</p>;
	}
	const faculty = {
		responsiveClass: true,
		nav: false,
		autoplay: false,
		navText: ["Prev", "Next"],
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			600: {
				items: 1,
			},
			700: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	};
	const suucesstories = {
		responsiveClass: true,
		nav: false,
		autoplay: false,
		navText: ["Prev", "Next"],
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			600: {
				items: 1,
			},
			700: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	};

	return (
		<div className='row'>
			<div className='col-md-8'>
				{/* Course Overview */}
				{props.content.overview_details ? (
					<div
						id='link1'
						className={classes.mb_4 + " " + classes.left_white_section}>
						<h3 className={classes.mb_4 + " " + classes.subhead}>
							<span
								className={classes.headline}
								dangerouslySetInnerHTML={{
									__html: props.content.main_title,
								}}
							/>
						</h3>
						{props.content.overview_details.map((detail, index) => {
							return (
								<OverviewContent
									key={index}
									title={detail.title}
									description={detail.description}
								/>
							);
						})}
					</div>
				) : (
					""
				)}
				{/* Course Overview Ends */}
				{/* Accordion */}

				{props.content.accordian_details ? (
					<div
						className={
							classes.left_white_section +
							" " +
							classes.mt_1 +
							" " +
							classes.mb_4
						}>
						{props.content.accordion_title ? (
							<h3 className={classes.mb_4 + " " + classes.subhead}>
								<span className={classes.headline}>
									{props.content.accordion_title}
								</span>
							</h3>
						) : (
							""
						)}

						{description}
						{props.content.accordian_details.map((detail, index) => {
							return (
								<CourseAccordian
									key={index}
									title={detail.title}
									description={detail.description}
									id={index}
								/>
							);
						})}
					</div>
				) : (
					""
				)}
				{/* Accordion Ends */}
				{/* Course Highlights */}
				{props.content.course_highlights ? (
					<div
						id='link2'
						className={
							classes.mt_1 +
							" " +
							classes.mb_4 +
							" " +
							classes.left_white_section +
							" " +
							classes.phighlights
						}>
						<h3 className={classes.mb_4 + " " + classes.subhead}>
							<span className={classes.headline}>
								{props.content.highlights_title}
							</span>
						</h3>

						{props.content.highlights_description ? (
							<div
								dangerouslySetInnerHTML={{
									__html: props.content.highlights_description,
								}}
							/>
						) : (
							""
						)}
						<div className={"col-md-12 " + classes.course_high}>
							<div className='row'>
								{props.content.course_highlights.map((detail, index) => {
									return (
										<CourseHighlight
											key={index}
											icon={detail.icon}
											description={detail.description}
										/>
									);
								})}
							</div>
						</div>
					</div>
				) : (
					""
				)}
				{/* Course Highlights Ends */}
				{/* Course Detail */}
				<div
					id='link3'
					className={
						classes.mt_1 + " " + classes.mb_4 + " " + classes.left_white_section
					}>
					<div>
						<h3 className={classes.mb_4 + " " + classes.subhead}>
							<span className={classes.headline}>
								{props.content.courseDetails_title}
							</span>
						</h3>
						{props.content.courseDetails
							? props.content.courseDetails.map((detail, index) => {
									return (
										<CourseDetails
											key={index}
											title={detail.title}
											description={detail.description}
										/>
									);
							  })
							: ""}
					</div>
				</div>
				{/* Course Detail End */}
				{/* Faculty Slider */}
				{props.content.faculty ? (
					<div
						id='link5'
						className={
							classes.mt_1 +
							" " +
							classes.mb_4 +
							" " +
							classes.left_white_section
						}>
						{props.content.faculty_title ? (
							[
								props.content.faculty_title ? (
									<h3 className={classes.mb_4 + " " + classes.subhead} key='0'>
										<span className={classes.headline}>
											{props.content.faculty_title}
										</span>
									</h3>
								) : (
									""
								),

								props.content.faculty_description ? (
									<p className={classes.mb_4}>
										{props.content.faculty_description}
									</p>
								) : (
									""
								),
							]
						) : (
							<h3 className={classes.mb_4 + " " + classes.subhead} key='1'>
								<span className={classes.headline}>Programme Directors</span>
							</h3>
						)}
						<OwlCarousel
							className='owl-theme'
							{...faculty}
							key={props.content.faculty_id}>
							{props.content.faculty.map((detail, index) => {
								return (
									<CourseFaculty
										key={index}
										name={detail.name}
										description={detail.description}
										designation={detail.designation}
										image={detail.image}
										id={index}
									/>
								);
							})}
						</OwlCarousel>
					</div>
				) : (
					""
				)}
				{/* Faculty Slider Ends */}
				{/* Certificate Detail */}
				{props.content.certificate ? (
					<div
						id='link6'
						className={
							classes.mt_1 +
							" " +
							classes.mb_4 +
							" " +
							classes.left_white_section
						}>
						<h3 className={classes.mb_4 + " " + classes.subhead}>
							<span className={classes.headline}>
								{props.content.certicate_maintitle}
							</span>
						</h3>
						{props.content.certificate.map((detail, index) => {
							return (
								<CourseCertificate
									key={index}
									title={detail.title}
									description={detail.description}
									certificate={detail.certificate}
								/>
							);
						})}
					</div>
				) : (
					""
				)}
				{/* Certificate Detail End */}
				{/* Date & Fees */}
				{props.content.datefees ? (
					<div
						id='link7'
						className={
							classes.mt_1 +
							" " +
							classes.mb_4 +
							" " +
							classes.left_white_section
						}>
						<h3 className={classes.mb_4 + " " + classes.subhead}>
							<span className={classes.headline}>
								{props.content.datefees_title}
							</span>
						</h3>
						{props.content.datefees.map((detail, index) => {
							return (
								<CourseDateFees
									key={index}
									title={detail.title}
									description={detail.description}
								/>
							);
						})}
					</div>
				) : (
					""
				)}
				{/* Date & Fees End */}
				{/* Success Stories */}
				{props.content.success_stories ? (
					<div
						className={
							classes.left_white_section +
							" " +
							classes.mt_1 +
							" " +
							classes.mb_4
						}>
						<div
							id='demo2'
							className='carousel slide container faculty-carousel'
							data-ride='carousel'>
							<h3 className='mb-4 subhead'>
								<span className='headline'>Success Stories</span>
							</h3>
							<ul className=''>
								<li
									data-target='#demo2'
									data-slide-to='0'
									className='active'></li>
								<li data-target='#demo2' data-slide-to='1'></li>
								<li data-target='#demo2' data-slide-to='2'></li>
							</ul>
							<OwlCarousel
								className='owl-theme'
								{...suucesstories}
								key={props.content.success_stories_id}>
								{props.content.success_stories.map((detail, index) => {
									return (
										<CourseSuccessStories
											key={index}
											name={detail.name}
											description={detail.description}
											designation={detail.designation}
											image={detail.image}
										/>
									);
								})}
							</OwlCarousel>
						</div>
					</div>
				) : (
					""
				)}
				{/* Success Stories End*/}
			</div>
			<div
				id='right-side-bar'
				className={
					"col-md-4 col-s-12 col-sm-12 col-xs-12 mb-5 " +
					classes.sticky_top +
					" " +
					classes.right_side_bar
				}>
				<div
					className={
						classes.sticky_top +
						" " +
						classes.right_side_bar +
						" " +
						classes.p_4 +
						" " +
						classes.white_form +
						" " +
						classes.shadow
					}>
					<CourseForm
						id={props.content.id}
						email_id={props.content.mailid}
						program_id={props.content.program_id}
						sf_course_name={props.content.sf_course_name}
						title={props.content.title}
					/>
				</div>
			</div>
		</div>
	);
}

export default CourseContent;
