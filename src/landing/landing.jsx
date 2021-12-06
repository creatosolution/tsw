/** @format */
import { useEffect, useState } from "react";
import LandingBanner from "./banner";
import HeaderLanding from "./header";
import CourseInfo from "./courseInfo";
import LandingHighlights from "./landingHighlights";
import CourseAccordian from "../courses/course-content/courseAccordian";
import OverviewContentLanding from "./overviewContentlanding";
import classes from "./assets/css/landing.module.css";
import Testimonial from "./testimonial";
import footlogo from "./assets/img/foot-logo.png";
import {
	BrowserRouter as Router,
	Link,
	Route,
	Routes,
	useParams,
} from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../courses/course-content/Owl.css";
function Landing() {
	const [isLoading, isLoadingSet] = useState(true);
	const [isContent, isContentSet] = useState([]);
	const { slug } = useParams();
	const options = {
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
				items: 2,
			},
		},
	};
	useEffect(() => {
		fetch("https://27b65434b1.nxcli.net/wp-json/tsw/v1/landing/" + slug)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				isContentSet(data);
				isLoadingSet(false);
			});
	}, []);
	if (isLoading) {
		return (
			<section>
				<p>Loading ...</p>
			</section>
		);
	}
	return (
		<div className={classes.tws_wrapper + " " + classes.ryc_page}>
			<HeaderLanding logo={isContent} />
			<LandingBanner data={isContent} />
			<div className={"mb-md-4 " + classes.course_info_wp}>
				<div className='container-lg'>
					<div
						className={
							"row justify-content-center " + classes.duration_fees_info
						}>
						{isContent.course_details.map((detail, index) => {
							return (
								<CourseInfo
									key={index}
									title={detail.title}
									description={detail.description}
								/>
							);
						})}
					</div>
				</div>
			</div>
			{isContent.content ? (
				<div className='container mb-4'>
					<p
						className='text-center text-lg-left mb-0 para_text'
						dangerouslySetInnerHTML={{
							__html: isContent.content,
						}}
					/>
				</div>
			) : (
				""
			)}
			{isContent.highlights_title ? (
				<div className='mb-0'>
					<div className={classes.green_bg + " py-3 mb-4"}>
						<h2
							className={
								"container  text-lg-center  text-md-center text-sm-left " +
								classes.title_h
							}>
							{isContent.highlights_title}
						</h2>
					</div>
					<div className='container'>
						<div className={"row " + classes.highlight_wp}>
							{isContent.programme_highlights.map((detail, index) => {
								return (
									<LandingHighlights
										key={index}
										title={detail.description}
										icon={detail.icon}
									/>
								);
							})}
						</div>
					</div>
				</div>
			) : (
				""
			)}
			<div className='mb-5 pb-5' style={{ background: "#F5F5F5" }}>
				<div className={classes.green_bg}>
					<div className='container px-2 mb-4'>
						<ul
							className={
								classes.nav_tabs +
								" nav no_gutters text-center d-flex justify-content-between"
							}
							role='tablist'>
							<li className='nav-item col-8'>
								<a
									className={
										classes.nav_link + " " + classes.active + " " + classes.py_3
									}
									data-toggle='tab'
									href='#tabs-1'
									role='tab'>
									Programme Content
								</a>{" "}
							</li>
						</ul>
						{/* Tab panes */}
					</div>
				</div>
				<div className='container'>
					{/* Tab section start*/}
					<div className='tab-content'>
						<div className='tab-pane active' id='tabs-1' role='tabpanel'>
							<div id='accordion' className='accordion nest_acc'>
								<div className='card mb-0'>
									{isContent.accordian_details.map((detail, index) => {
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
							</div>
						</div>
					</div>
					{/* Tab section end*/}
				</div>
			</div>
			{/* 06 program Section */}
			<div className={classes.program_content_2}>
				<div className='container'>
					<div className='row'>
						<div className='col-md-7 col-12 left-col'>
							{isContent.overview_details
								? isContent.overview_details.map((detail, index) => {
										return (
											<OverviewContentLanding
												key={index}
												title={detail.title}
												description={detail.description}
											/>
										);
								  })
								: ""}
						</div>
						<div className='col-md-5 col-12 right-col'>
							{isContent.institute_image ? (
								<img
									src={isContent.institute_image}
									className='w-100 mb-4'
									alt='IIM Calcutta - TimesTSW'
								/>
							) : (
								""
							)}
							<div className='application-close-wrp'>
								<h2 className='title-g'>Application Closes in</h2>
								<div className='days-col'>
									{" "}
									<span id='demo'>1 Days: 2 Hours: 51 min </span>{" "}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{isContent.success_stories ? (
				<div className='testimonials-brands'>
					<div className='container'>
						<div className='testimonials-brndwrp'>
							<div className={classes.testimonials_brndwrp_info + " col-md-4"}>
								<h4>Students Testimonials</h4>
							</div>
							<div className='testimonials_brnds col-md-12'>
								<div className='owl-carousel owl-theme owl-loaded owl-drag'>
									<div className='owl-stage-outer owl-height'>
										<div className='owl-stage'>
											<OwlCarousel
												className='owl-theme'
												{...options}
												key={isContent.success_stories_id}>
												{isContent.success_stories.map((detail, index) => {
													return (
														<Testimonial
															key={index}
															name={detail.name}
															description={detail.description}
															designation={detail.designation}
															department={detail.department}
															image={detail.image}
														/>
													);
												})}
											</OwlCarousel>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				""
			)}
			{/*footer*/}
			<footer className={classes.tws_footer + " " + classes.tws_footer2}>
				<div className='container'>
					<span className={classes.small_txt}>
						THIS PROGRAMME IS OFFERED BY
					</span>
					<div className='row justify-content-center align-items-center'>
						<div className={"col-auto mb-3 mb-sm-0 " + classes.border_right}>
							<img src={isContent.logo} className='d-table mx-auto' alt='' />
						</div>
						<div className='col-auto'>
							<Link to='/react'>
								<img src={footlogo} className='d-table mx-auto' alt='' />
							</Link>
						</div>
					</div>
				</div>
			</footer>
			{/*/footer*/}
			{/*<div className='apply_btn_wrp d-block d-md-none'>
				<button>Apply Now</button>
            </div>*/}
		</div>
	);
	{
		/*/main-wrapper*/
	}
}

export default Landing;
