import React from "react";
import "../../style/css/orderForm.css";
import PersonalData from "./PersonalData";
import TotalPriceWindow from "../TotalPriceWindow";
import DeliveryAddress from "./DeliveryAddress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const OrderForm = () => {
	return (
		<>
			<div className="back-btn-container">
				<NavLink to={"/cart"}>
					<button className="back-btn-container__back-btn button-anim">
						<FontAwesomeIcon icon={faAngleLeft} className="arrow" />
						Edit cart
					</button>
				</NavLink>
			</div>

			<div className="order-form-page">
				<div className="order-form-container">
					<PersonalData />
					<DeliveryAddress />
				</div>
				<TotalPriceWindow linkTo={""} btnText={"Submit and buy"} />
			</div>
		</>
	);
};

export default OrderForm;
