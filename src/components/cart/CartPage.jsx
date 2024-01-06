import React from "react";
import CartFinal from "./CartFinal";
import "../../style/css/cartPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const CartPage = () => {
	return (
		<>
			<div className="cart-page-wrapper">
				<CartFinal />
				<button className="cart-page-wrapper__back-to-shopping-btn button-anim">
					<FontAwesomeIcon icon={faAngleLeft} className="arrow-left" />
					Back to shopping
				</button>
			</div>
		</>
	);
};

export default CartPage;
