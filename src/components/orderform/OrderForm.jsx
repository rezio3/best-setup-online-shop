import React, { useContext, useState } from "react";
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
import {
	deliveryCheckboxesArray,
	paymentCheckboxesArray,
} from "../../objects/deliveryAndPaymentCheckboxes";
import { ProductsOrderContext } from "../../context/OrderContext";

const OrderForm = () => {
	const [order] = useContext(ProductsOrderContext);
	const [validation, setValidation] = useState({
		name: false,
		surname: false,
		phone: false,
		email: false,
		city: false,
		postalCode: false,
		street: false,
		buildingNumber: false,
	});
	const [buyBtnClicked, setBuyBtnClicked] = useState(false);

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
						<PersonalData
							validation={validation}
							setValidation={setValidation}
							buyBtnClicked={buyBtnClicked}
						/>
						<DeliveryAddress
							validation={validation}
							setValidation={setValidation}
							buyBtnClicked={buyBtnClicked}
						/>
						<DeliveryAndPaymentOptions
							header={"Delivery method"}
							checkboxes={deliveryCheckboxesArray}
							default={order.customer.deliveryMethod.method}
						/>
						<DeliveryAndPaymentOptions
							header={"Payment method"}
							checkboxes={paymentCheckboxesArray}
							default={order.customer.paymentMethod}
						/>
						<AdditionalInformation />
					</div>
					<TotalPriceWindow
						linkTo={"/summary"}
						btnText={"Submit and buy"}
						validation={validation}
						setBuyBtnClicked={setBuyBtnClicked}
					/>
				</div>
				<FinalCartLowerBox />
			</div>
		</>
	);
};

export default OrderForm;
