import React from "react";
import "../../style/css/orderForm.css";
import PersonalData from "./PersonalData";
import TotalPriceWindow from "../TotalPriceWindow";

const OrderForm = () => {
	return (
		<>
			<div className="order-form-page">
				<div className="order-form-container">
					<PersonalData />
					<DeliveryAddress />
				</div>
				<TotalPriceWindow />
			</div>
		</>
	);
};

export default OrderForm;
