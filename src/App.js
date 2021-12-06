
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Landing from "./landing/landing";
import Course from "./courses/course";


function App() {
	const [isBrowseCourses, isBrowseCoursesSet] = useState([]);

	useEffect(() => {
		fetch("https://27b65434b1.nxcli.net/wp-json/tsw/v1/all-courses/")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				isBrowseCoursesSet(data);
			});
	}, []);
	return (
		<div>
			<Router>
				<Routes>
					<Route
						path='/react/:slug'
						element={<Course CoursesList={isBrowseCourses} />}
					/>
					<Route path='/react/landing/:slug' element={<Landing />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
