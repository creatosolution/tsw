/** @format */
import classes from "./banner.module.css";

function Banner(props) {
	return (
		<div className={classes.container_img + " " + classes.course_ban}>
			<div className={classes.img_bg}>
				<img src={props.data.banner_image} alt={props.data.title} />
			</div>
			<div className={classes.custom_container}>
				<div className='row'>
					<div
						className={
							"col-lg-6 col-md-8 p-3 mt-2 " +
							classes.text_overlay_content +
							" " +
							classes.course_title_cont
						}>
						<div>
							<div className={classes.timestsw_mobile_style}>
								<div className={classes.course_logos}>
									<img
										width='97'
										height='97'
										src='https://27b65434b1.nxcli.net/wp-content/uploads/2020/03/home-IIMK.png'
										alt=''
									/>
								</div>
								<div className={classes.timestsw_mobile_sticky}>
									<h1
										dangerouslySetInnerHTML={{
											__html: props.data.title,
										}}
									/>
									<div className={classes.d_lg_flex + " " + classes.mt_3}>
										<p className={classes.font_weight_lighter}>
											<b>Course Starts: </b>
											<span
												dangerouslySetInnerHTML={{
													__html: props.data.course_starts,
												}}
											/>
											&nbsp; |&nbsp;
										</p>

										<p>
											<b> Admission:</b> {props.data.addmission_status}
										</p>
									</div>
								</div>
							</div>
							<div
								className={
									"d-flex mt-2" +
									" " +
									classes.mapply +
									" " +
									classes.timestsw_apply_stic
								}>
								<a
									href={props.data.apply_link}
									target='_blank'
									rel='noreferrer'
									id='stick'
									className={
										"mr-3" +
										" " +
										classes.rectangle_red_btn +
										" " +
										classes.rectangle_mobile_btn +
										" " +
										classes.applylinktest
									}>
									Apply Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;
