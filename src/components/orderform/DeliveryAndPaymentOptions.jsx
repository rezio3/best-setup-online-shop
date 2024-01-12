import React from "react";
import DeliveryCheckbox from "./DeliveryCheckbox";

const DeliveryAndPaymentOptions = () => {
	const deliveryCheckboxesArray = [
		{ name: "Courier shipping", price: "7.99" },
		{ name: "Express delivery", price: "11.00" },
		{ name: "Parcel locker", price: "5.99" },
		{ name: "In-store pickup", price: "0.00" },
	];
	return (
		<>
			<ul className="delivery-options-container">
				<h3 className="delivery-options-container__header">Delivery method</h3>
				{deliveryCheckboxesArray.map((e) => (
					<DeliveryCheckbox name={e.name} price={e.price} key={e.name} />
				))}
			</ul>
		</>
	);
};

export default DeliveryAndPaymentOptions;
