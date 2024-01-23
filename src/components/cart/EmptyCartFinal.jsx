import React from "react";
import "../../style/css/emptyCartFinal.css";
import { NavLink } from "react-router-dom";
import GoToHomePageButton from "../GoToHomePageButton";

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
				<GoToHomePageButton />
			</div>
		</>
	);
};

export default EmptyCartFinal;
