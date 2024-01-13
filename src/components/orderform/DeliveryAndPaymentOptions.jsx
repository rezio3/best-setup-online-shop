import React from "react";
import DeliveryCheckbox from "./DeliveryCheckbox";

const DeliveryAndPaymentOptions = (props) => {
	return (
		<>
			<ul className="delivery-payment-options-container">
				<h3 className="delivery-payment-options-container__header">
					{props.header}
				</h3>
				{props.checkboxes.map((e) => (
					<DeliveryCheckbox name={e.name} price={e.price} key={e.name} />
				))}
			</ul>
		</>
	);
};

export default DeliveryAndPaymentOptions;
