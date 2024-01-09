import React from "react";
import "../../style/css/emptyCartFinal.css";
import { NavLink } from "react-router-dom";

const EmptyCartFinal = () => {
	return (
		<>
			<div className="empty-cart-final-container">
				<h4 className="empty-cart-final-container__header">
					Your cart is empty.
				</h4>
				<span className="empty-cart-final-container__inspiration-span">
					Looking for inspiration?
				</span>
				<NavLink to="/">
					<button className="empty-cart-final-container__homepage-btn button-anim">
						Go to the homepage!
					</button>
				</NavLink>
			</div>
		</>
	);
};

export default EmptyCartFinal;
