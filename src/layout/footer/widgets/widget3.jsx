/** @format */
import { useEffect, useState } from "react";
import FooterNavigation from "../footernavigation";

function Widget3() {
	const [isFooterNavigation, isFooterNavigationSet] = useState([]);

	useEffect(() => {
		fetch("https://27b65434b1.nxcli.net/wp-json/tsw/v1/menu/5")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				isFooterNavigationSet(data);
			});
	}, []);
	return (
		<div className='col-lg-2 col-md-6'>
			<h6 className='mb-3'>Quick Links</h6>

			<div className='menu-quick-links-container'>
				<ul id='menu-quick-links' className='list-bottom'>
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

export default Widget3;
