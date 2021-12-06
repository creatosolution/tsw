/** @format */

import Widget1 from "./widgets/widget1";
import Widget2 from "./widgets/widget2";
import Widget3 from "./widgets/widget3";
import Widget4 from "./widgets/widget4";
import classes from "./footermenu.module.css";
function FooterMenu(props) {
	return (
		<div
			className={
				classes.footer_1 +
				" " +
				classes.mt_4 +
				" " +
				classes.mt_md_0 +
				" " +
				classes.p_5
			}>
			<div className={classes.custom_container}>
				<div className='row'>
					<Widget1 CoursesList={props.CoursesList} />
					<Widget2 />
					<Widget3 />
					<Widget4 />
				</div>
			</div>
		</div>
	);
}

export default FooterMenu;
