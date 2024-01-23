import React from "react";
import { NavLink } from "react-router-dom";

const GoToHomePageButton = () => {
	return (
		<>
			<NavLink to="/">
				<button className="empty-cart-final-container__homepage-btn button-anim">
					Go to the homepage!
				</button>
			</NavLink>
		</>
	);
};

export default GoToHomePageButton;
