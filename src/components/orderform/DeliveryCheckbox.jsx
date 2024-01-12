import React from "react";

const DeliveryCheckbox = (props) => {
	return (
		<>
			<li className="delivery-options-container__option-element">
				<label className="delivery-options-container__label">
					<input type="checkbox" className="checkbox"></input>
					{props.name}
				</label>
				<span className="delivery-options-container__option-price">
					{props.price} $
				</span>
			</li>
		</>
	);
};

export default DeliveryCheckbox;
