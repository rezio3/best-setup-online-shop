import React from "react";
import CustomerDataInput from "./CustomerDataInput";

const DeliveryAddress = () => {
	return (
		<>
			<div className="data-container">
				<h3 className="data-container__header">Delivery address</h3>
				<div className="data-container__inputs-container">
					<div className="data-container__inputs-box">
						<CustomerDataInput label="City*" />
						<CustomerDataInput label="Postal code*" />
					</div>
					<div className="data-container__inputs-box">
						<CustomerDataInput label="Street*" />
						<CustomerDataInput label="Building number*" />
					</div>
					<div className="data-container__inputs-box">
						<CustomerDataInput label="Flat number" />
					</div>
				</div>
			</div>
		</>
	);
};

export default DeliveryAddress;
