import React from "react";

const DeliveryOptions = () => {
	return (
		<>
			<ul className="delivery-options-container">
				<h3 className="delivery-options-container__header">Delivery method</h3>
				<li className="delivery-options-container__option-element">
					<label className="delivery-options-container__label">
						<input type="checkbox" className="checkbox"></input>
						Courier shipping
					</label>
					<span className="delivery-options-container__option-price">
						7,99 $
					</span>
				</li>
				<li className="delivery-options-container__option-element">
					<label className="delivery-options-container__label">
						<input type="checkbox" className="checkbox"></input>
						Express delivery
					</label>
					<span className="delivery-options-container__option-price">
						11,00 $
					</span>
				</li>
				<li className="delivery-options-container__option-element">
					<label className="delivery-options-container__label">
						<input type="checkbox" className="checkbox"></input>
						Parcel locker
					</label>
					<span className="delivery-options-container__option-price">
						5,99 $
					</span>
				</li>
				<li className="delivery-options-container__option-element">
					<label className="delivery-options-container__label">
						<input type="checkbox" className="checkbox"></input>
						In-store pickup
					</label>
					<span className="delivery-options-container__option-price">
						0,00 $
					</span>
				</li>
			</ul>
		</>
	);
};

export default DeliveryOptions;
