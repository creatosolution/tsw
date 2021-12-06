/** @format */
import classes from "./courseNavigation.module.css";

function CourseNavigation(props) {
	let title = null;

	if (props.navigation.id == "17633" || props.navigation.id == "18071") {
		title = "Programme";
	} else {
		title = "Course";
	}
	return (
		<div
			className={
				classes.mb_3 + " " + classes.top_sticky + " " + classes.static_position
			}
			id='sticky-wrapper'>
			<ul
				className={
					"col-s-12 w-100 " +
					classes.mobile_bg_white +
					" " +
					classes.rectangle_white_nav_btn +
					" " +
					classes.display_flex +
					" " +
					classes.bg_white +
					" " +
					classes.margin0 +
					" " +
					classes.mobile_list_view +
					" " +
					classes.margin_left_mobile +
					" " +
					classes.padding0
				}>
				<li
					className={
						classes.margin0 +
						" " +
						classes.font_size_fourteen +
						" " +
						classes.p_3 +
						" " +
						classes.mobi_hide
					}>
					<a href='#link1'>Overview </a>
				</li>
				<li
					className={
						classes.font_size_fourteen +
						" " +
						classes.p_3 +
						" " +
						classes.mobi_hide
					}>
					<a href='#link2'>{title} Highlights</a>
				</li>
				<li
					className={
						classes.font_size_fourteen +
						" " +
						classes.p_3 +
						" " +
						classes.mobi_hide
					}>
					<a href='#link3'>{title} Detail</a>
				</li>

				<li
					className={
						classes.font_size_fourteen +
						" " +
						classes.p_3 +
						" " +
						classes.mobi_hide
					}>
					<a href='#link5'>Programme Directors </a>
				</li>
				<li
					className={
						classes.font_size_fourteen +
						" " +
						classes.p_3 +
						" " +
						classes.mobi_hide
					}>
					<a href='#link6'>Certificate</a>
				</li>
				<li
					className={
						classes.font_size_fourteen +
						" " +
						classes.p_3 +
						" " +
						classes.mobi_hide
					}>
					<a href='#link7'>Date and Fees</a>
				</li>
				<li
					className={
						classes.font_size_fourteen +
						" " +
						classes.p_3 +
						" " +
						classes.mobi_hide +
						" " +
						classes.rectangle_red_btn
					}
					data-toggle='modal'
					data-target='#brochure'
					target='_blank'
					rel='noreferrer'>
					Download Brochure
				</li>
			</ul>
			<div className='clear'></div>
		</div>
	);
}

export default CourseNavigation;
