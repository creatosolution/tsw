/** @format */
import classes from "./assets/css/banner.module.css";
import LandingForm from "./landingForm";
function LandingBanner(props) {
	return (
		<div className={classes.banner_wrp + " mb-4 mb-lg-0"}>
			<img src={props.data.banner_image} className='d-block' alt='Banner' />
			<div className={classes.banner_data}>
				<div className='container-lg'>
					<div className='row align-items-start justify-content-between'>
						<div className='col-12 col-md-7 col-xl-7'>
							<div className={classes.banner_txt}>
								<h1
									dangerouslySetInnerHTML={{
										__html: props.data.title,
									}}></h1>
							</div>
						</div>
						<div className='col-12 col-md-5 col-lg-4 col-xl-5 form_wrapper'>
							<div className='d-flex h-100'>
								<div className='m-auto'>
									<p className={"text-center" + " " + classes.regi_text}>
										Register Now
									</p>
									<div
										id='top-application-form'
										className='epgcpmForm form_box position-relative '>
										<LandingForm
											id={props.data.id}
											email_id={props.data.mailid}
											program_id={props.data.program_id}
											sf_course_name={props.data.sf_course_name}
											title={props.data.title}
											key={props.data.id}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LandingBanner;
