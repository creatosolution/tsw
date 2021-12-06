/** @format */
import { useEffect, useState } from "react";
import TopBarNavigation from "./topbarNavigation";
import classes from "./assets/css/topbar.module.css";
import { Link } from "react-router-dom";

function Topbar() {
	const [istopbar, istopbarSet] = useState([]);

	useEffect(() => {
		fetch("https://27b65434b1.nxcli.net/wp-json/tsw/v1/menu/3")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				istopbarSet(data);
			});
	}, []);
	return (
		<nav className={classes.top_nav}>
			<div className={classes.custom_container}>
				<div className={classes.menu_top_menu_container}>
					<ul
						className={
							classes.d_inline_block +
							" " +
							classes.float_right +
							" " +
							classes.m_0 +
							" " +
							classes.text_color_grey +
							" " +
							classes.py_2
						}>
						{istopbar.map((detail) => {
							return (
								<TopBarNavigation
									key={detail.ID}
									title={detail.title}
									id={detail.ID}
								/>
							);
						})}
						<Link to='/react/landing/transitioning-into-leadership-a-programme-for-women-executives/'>
							Landing
						</Link>
					</ul>
				</div>
				<div className='clearfix'></div>
			</div>
		</nav>
	);
}

export default Topbar;
