import React, { useContext } from "react";
import "../../style/css/orderForm.css";
import PersonalData from "./PersonalData";
import TotalPriceWindow from "../TotalPriceWindow";
import DeliveryAddress from "./DeliveryAddress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import DeliveryAndPaymentOptions from "./DeliveryAndPaymentOptions";
import AdditionalInformation from "./AdditionalInformation";
import FinalCartLowerBox from "../cart/FinalCartLowerBox";
import "../../style/css/finalCartLowerBox.css";

const OrderForm = () => {
	const deliveryCheckboxesArray = [
		{ name: "Courier shipping", price: "7.99" },
		{ name: "Express delivery", price: "11.00" },
		{ name: "Parcel locker", price: "5.99" },
	];
	const paymentCheckboxesArray = [
		{ name: "Credit/Debit card" },
		{ name: "PayPal" },
		{ name: "Cryptocurrency" },
		{ name: "American Express" },
		{ name: "BLIK" },
	];

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
			<div className="order-form-page-wrapper">
				<div className="order-form-page">
					<div className="order-form-container">
						<PersonalData />
						<DeliveryAddress />
						<DeliveryAndPaymentOptions
							header={"Delivery method"}
							checkboxes={deliveryCheckboxesArray}
							default={"Courier shipping"}
						/>
						<DeliveryAndPaymentOptions
							header={"Payment method"}
							checkboxes={paymentCheckboxesArray}
							default={"Credit/Debit card"}
						/>
						<AdditionalInformation />
					</div>
					<TotalPriceWindow linkTo={""} btnText={"Submit and buy"} />
				</div>
				<FinalCartLowerBox />
			</div>
		</>
	);
};

export default OrderForm;
