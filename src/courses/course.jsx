/** @format */
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import { useEffect, useState } from "react";
import Banner from "./banners/banner";
import { Helmet } from "react-helmet";
import CourseDetails from "./course-details/courseDetails";
import CourseOverview from "./course-overview/courseOverview";
import classes from "./course.module.css";
import CourseNavigation from "./courseNavigation/courseNavigation";
import CourseContent from "./course-content/courseContent";
import {
	BrowserRouter as Router,
	Link,
	Route,
	Routes,
	useParams,
} from "react-router-dom";


function Course(props) {
	let { slug } = useParams();

	const [isLoading, isLoadingSet] = useState(true);
	const [isContent, isContentSet] = useState([]);

	useEffect(() => {
		fetch("https://27b65434b1.nxcli.net/wp-json/tsw/v1/courses/" + slug)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				isContentSet(data);
				isLoadingSet(false);
			});
	}, [slug]);

	if (isLoading) {
		return (
			<section>
				<p>Loading ...</p>
			</section>
		);
	}
	return (

		
		<div>
			<Helmet>
				<title>{isContent.yoast_title}</title>
				<meta name='description' content={isContent.yoast_description} />
				<meta property='og:locale' content='en_US' />
				<meta property='og:type' content='article' />
				<meta property='og:title' content={isContent.yoast_title} />
				<meta property='og:description' content={isContent.yoast_description} />
				<meta property='og:url' content={"/react/" + slug} />
				<meta property='og:image' content={isContent.banner_image} />
				<meta property='og:image:width' content='304' />
				<meta property='og:image:height' content='172' />
				<meta name='twitter:card' content='summary_large_image' />
			</Helmet>
			<Header CoursesList={props.CoursesList} />
			<main className={classes.bg_grey}>
				<Banner data={isContent} />
				<CourseDetails details={isContent} />
				<div className={classes.custom_container}>
					<CourseOverview overview={isContent} />
					<CourseNavigation navigation={isContent} />
				</div>
				<div
					className={
						"col-md-12 " +
						classes.clear +
						" " +
						classes.over_vw +
						" " +
						classes.custom_container
					}>
					<CourseContent content={isContent} />
				</div>
			</main>
			<Footer CoursesList={props.CoursesList} />
		</div>
	);
}

export default Course;
