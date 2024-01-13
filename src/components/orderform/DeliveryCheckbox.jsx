import React from "react";

const DeliveryCheckbox = (props) => {
	return (
		<>
			<li className="delivery-payment-options-container__option-element">
				<label className="delivery-payment-options-container__label">
					<input type="checkbox" className="checkbox"></input>
					{props.name}
				</label>
				{props.price ? (
					<span className="delivery-payment-options-container__option-price">
						{props.price} $
					</span>
				) : null}
			</li>
		</>
	);
};

export default DeliveryCheckbox;
