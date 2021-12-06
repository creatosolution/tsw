/** @format */

import MainNavigation from "./mainNavigation";
import Topbar from "./topbar";
//import classes from "./assets/css/header.module.css";

function Header(props) {
	return (
		<header>
			<Topbar />
			<MainNavigation CoursesList={props.CoursesList} />
		</header>
	);
}

export default Header;
