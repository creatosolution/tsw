/** @format */
import { useEffect, useState } from "react";
import FooterNavigation from "../footernavigation";
function Widget4() {
	const [isFooterNavigation, isFooterNavigationSet] = useState([]);

	useEffect(() => {
		fetch("https://27b65434b1.nxcli.net/wp-json/tsw/v1/menu/8")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				isFooterNavigationSet(data);
			});
	}, []);
	return (
		<div className='col-lg-2 col-md-6 terms-foot'>
			<h6 className='mb-3'>Terms</h6>

			<div className='menu-terms-links-container'>
				<ul id='menu-terms-links' className='list-bottom'>
					{isFooterNavigation.map((detail) => {
						return (
							<FooterNavigation
								key={detail.ID}
								title={detail.title}
								id={detail.ID}
								parentId={detail.menu_item_parent}
								submenu={detail.submenu}
							/>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default Widget4;
