import React from "react";
import CustomerDataInput from "./CustomerDataInput";

const DeliveryAddress = () => {
	const validCityAndStreet = /^[\p{L}\s]{1,}$/u;
	const validPostalCode = /^.{3,}$/;
	const validBuildingNumber = /^.*\S.*$/;

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
							valid={validCityAndStreet}
						/>
						<CustomerDataInput
							label="Postal code*"
							inputName="postalCode"
							dataType="address"
							valid={validPostalCode}
						/>
					</div>
					<div className="data-container__inputs-box">
						<CustomerDataInput
							label="Street*"
							inputName="street"
							dataType="address"
							valid={validCityAndStreet}
						/>
						<CustomerDataInput
							label="Building number*"
							inputName="buildingNumber"
							dataType="address"
							valid={validBuildingNumber}
						/>
					</div>
					<div className="data-container__inputs-box">
						<CustomerDataInput
							label="Flat number"
							inputName="flatNumber"
							dataType="address"
							valid={validBuildingNumber}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeliveryAddress;
