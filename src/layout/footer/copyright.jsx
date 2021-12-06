/** @format */
import classes from "./copyright.module.css";

function Copyright() {
	return (
		<div
			className={
				classes.footer_2 +
				" " +
				classes.p_1 +
				" " +
				classes.d_flex +
				" " +
				classes.justify_content_between
			}>
			<div className={classes.custom_container}>
				<div className={classes.copy}>
					<p>
						Copyright © 2021 TIMES TSW - A TIMES GROUP INITIATIVE A PART OF
						BENNETT COLEMAN &amp; CO LTD
					</p>
				</div>

				<div className={classes.p_1 + " " + classes.f_social}>
					<p>Connect with us.</p>

					<a
						href='https://www.youtube.com/channel/UCLSerpDsVVgu93D0COZzmeg'
						target='_blank'
						rel='noreferrer'>
						<img
							width='21'
							height='21'
							className={classes.footer_social_icons}
							src='https://eadn-wc03-3259662.nxedge.io/cdn/wp-content/themes/tsw/images/youtube-ico.png'
							alt='youtube'
						/>
					</a>

					<a
						href='https://in.linkedin.com/company/tsw--the-second-wind'
						target='_blank'
						rel='noreferrer'>
						<img
							className={classes.footer_social_icons}
							src='https://eadn-wc03-3259662.nxedge.io/cdn/wp-content/themes/tsw/images/linkedin-letters.svg'
							alt='Linkedin'
						/>
					</a>

					<a
						href='https://www.facebook.com/timestsw/'
						target='_blank'
						rel='noreferrer'>
						<img
							className={classes.footer_social_icons}
							src='https://27b65434b1.nxcli.net/wp-content/themes/tsw/images/facebook (1).svg'
							alt='Facebook'
						/>
					</a>

					<a
						href='https://twitter.com/TimesTSW'
						target='_blank'
						rel='noreferrer'>
						<img
							className={classes.footer_social_icons}
							src='https://eadn-wc03-3259662.nxedge.io/cdn/wp-content/themes/tsw/images/twitter.svg'
							alt='Twitter'
						/>
					</a>

					<a
						href='https://api.whatsapp.com/send?phone=917400084666&amp;text=I%20saw%20your%20website%20and%20I%20wanted%20to%20enquire%20about%20a%20program%20'
						target='_blank'
						rel='noreferrer'>
						<img
							width='21'
							height='21'
							className={classes.footer_social_icons}
							src='https://eadn-wc03-3259662.nxedge.io/cdn/wp-content/themes/tsw/images/whatsapp-ico.png'
							alt='WhatsApp'
						/>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Copyright;
