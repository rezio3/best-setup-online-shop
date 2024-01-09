import React from "react";
import "../../style/css/orderForm.css";
import PersonalData from "./PersonalData";

const OrderForm = () => {
	return (
		<>
			<div className="order-form-page">
				<div className="order-form-container">
					<PersonalData />
				</div>
			</div>
		</>
	);
};

export default OrderForm;
