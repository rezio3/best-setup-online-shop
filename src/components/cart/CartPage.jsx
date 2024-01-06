import React from "react";
import CartFinal from "./CartFinal";
import "../../style/css/cartPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
	const navigate = useNavigate();
	const backBtnHandler = () => {
		navigate(-1);
	};
	return (
		<>
			<div className="cart-page-wrapper">
				<CartFinal />

				<button
					className="cart-page-wrapper__back-to-shopping-btn button-anim"
					onClick={backBtnHandler}
				>
					<FontAwesomeIcon icon={faAngleLeft} className="arrow-left" />
					Back to shopping
				</button>
			</div>
		</>
	);
};

export default CartPage;
