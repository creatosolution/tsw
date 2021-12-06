/** @format */
import {
	BrowserRouter as Router,
	Link,
	Route,
	Routes,
	useParams,
} from "react-router-dom";
function FooterSubmenu(props) {
	return (
		<li
			className='menu-item menu-item-type-custom menu-item-object-custom menu-item-544'
			key={props.id}>
			<Link
				to={"/react/" + props.slug}
				dangerouslySetInnerHTML={{
					__html: props.title,
				}}
			/>
		</li>
	);
}

export default FooterSubmenu;
