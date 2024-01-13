import React from "react";

const DeliveryCheckbox = (props) => {
	const checkboxInnerHandler = () => {
		props.checkboxHandler(props.name);
	};

	return (
		<>
			<li className="delivery-payment-options-container__option-element">
				<label className="delivery-payment-options-container__label">
					<input
						type="checkbox"
						className="checkbox"
						data-data={props.name}
						onChange={checkboxInnerHandler}
						checked={props.name === props.check}
					></input>
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
