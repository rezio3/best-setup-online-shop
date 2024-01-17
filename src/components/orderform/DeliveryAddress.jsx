import React from "react";
import CustomerDataInput from "./CustomerDataInput";

const DeliveryAddress = () => {
	return (
		<>
			<div className="data-container">
				<h3 className="data-container__header">Delivery address</h3>
				<div className="data-container__inputs-container">
					<div className="data-container__inputs-box">
						<CustomerDataInput
							label="City*"
							inputName="city"
							dataType="address"
						/>
						<CustomerDataInput
							label="Postal code*"
							inputName="postalCode"
							dataType="address"
						/>
					</div>
					<div className="data-container__inputs-box">
						<CustomerDataInput
							label="Street*"
							inputName="street"
							dataType="address"
						/>
						<CustomerDataInput
							label="Building number*"
							inputName="buildingNumber"
							dataType="address"
						/>
					</div>
					<div className="data-container__inputs-box">
						<CustomerDataInput
							label="Flat number"
							inputName="flatNumber"
							dataType="address"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeliveryAddress;
