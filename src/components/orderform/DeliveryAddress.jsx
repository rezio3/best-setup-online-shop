import React from "react";
import CustomerDataInput from "./CustomerDataInput";

const DeliveryAddress = () => {
	return (
		<>
			<div className="data-container">
				<h3 className="data-container__header">Delivery address</h3>
				<div className="data-container__inputs-container">
					<div className="data-container__inputs-box">
						<CustomerDataInput label="City*" inputName="city" />
						<CustomerDataInput label="Postal code*" inputName="postalCode" />
					</div>
					<div className="data-container__inputs-box">
						<CustomerDataInput label="Street*" inputName="street" />
						<CustomerDataInput
							label="Building number*"
							inputName="buildingNumber"
						/>
					</div>
					<div className="data-container__inputs-box">
						<CustomerDataInput label="Flat number" inputName="flatNumber" />
					</div>
				</div>
			</div>
		</>
	);
};

export default DeliveryAddress;
