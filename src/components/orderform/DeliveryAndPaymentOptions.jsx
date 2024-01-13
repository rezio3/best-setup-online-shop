import React, { useState } from "react";
import DeliveryCheckbox from "./DeliveryCheckbox";

const DeliveryAndPaymentOptions = (props) => {
	const [check, setCheck] = useState(props.default);

	const checkboxHandler = (e) => {
		setCheck(e);
	};

	return (
		<>
			<ul className="delivery-payment-options-container">
				<h3 className="delivery-payment-options-container__header">
					{props.header}
				</h3>
				{props.checkboxes.map((e) => (
					<DeliveryCheckbox
						name={e.name}
						price={e.price}
						key={e.name}
						check={check}
						checkboxHandler={checkboxHandler}
					/>
				))}
			</ul>
		</>
	);
};

export default DeliveryAndPaymentOptions;
