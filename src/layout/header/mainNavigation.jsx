/** @format */
import { useEffect, useState } from "react";
import Navigation from "./navigation";
import classes from "./assets/css/maninNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import BrowseCourses from "./browseCourses";
function MainNavigation(props) {
	const [isMainNavigation, isMainNavigationSet] = useState([]);
	const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);
	let active = "";
	if (hovered) {
		active = classes.active;
	}
	useEffect(() => {
		fetch("https://27b65434b1.nxcli.net/wp-json/tsw/v1/menu/2")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				isMainNavigationSet(data);
			});
	}, []);

	return (
		<nav>
			<div
				className={
					classes.navbar +
					" " +
					classes.navbar_expand_md +
					" " +
					classes.custom_container
				}>
				<div className={classes.logo_container}>
					<a
						className={classes.navbar_brand}
						href='https://27b65434b1.nxcli.net/'>
						<img
							width='170'
							height='48'
							className={classes.logo}
							src='https://eadn-wc03-3259662.nxedge.io/cdn/wp-content/themes/tsw/images/TSW-Logo.png'
							alt=''
							data-ll-status='loaded'
						/>
					</a>
				</div>
				<div className={classes.zeynep}>
					<div
						className={
							classes.course_div + " " + classes.has_submenu + " " + active
						}
						onMouseEnter={toggleHover}
						onMouseLeave={toggleHover}
						id='tabs'>
						<a
							className={
								classes.text_dark +
								" " +
								classes.course_button +
								" " +
								classes.pl_4
							}
							href=''>
							<FontAwesomeIcon icon={faTh} /> Browse Courses
						</a>
						<ul className={classes.course_list + " " + classes.mb_0}>
							<li className={classes.has_submenu}>
								<div id='course' className={classes.submenu}>
									<ul className={classes.course_list_menu + " " + classes.mb_0}>
										{props.CoursesList.map((detail, index) => {
											return (
												<BrowseCourses
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
							</li>
						</ul>
					</div>
					<div className={classes.pr_md_2 + " " + classes.primary_menu}>
						<div className={classes.navbar_nav + " " + classes.navbar_nav_des}>
							<div id='smoothmenu1' className={classes.ddsmoothmenu}>
								<ul id='menu-main-menu-1' className={classes.menu}>
									{isMainNavigation.map((detail) => {
										return (
											<Navigation
												key={detail.ID}
												title={detail.title}
												id={detail.ID}
												parentId={detail.menu_item_parent}
												submenu={detail.submenu}
											/>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default MainNavigation;
