/** @format */
import classes from "./assets/css/header.module.css";

function HeaderLanding(props) {
	return (
		<header className={classes.header}>
			<div className='container'>
				<img src={props.logo.logo} alt='Logo' className={classes.logo} />
			</div>
		</header>
	);
}

export default HeaderLanding;
