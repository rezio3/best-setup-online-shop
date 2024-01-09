import React from "react";
import CustomerDataInput from "./CustomerDataInput";

const PersonalData = () => {
	return (
		<>
			<div className="data-container">
				<h3 className="data-container__header">Personal data & contact</h3>
				<div className="data-container__inputs-container">
					<div className="data-container__inputs-box">
						<CustomerDataInput label="Name*" />
						<CustomerDataInput label="Surname*" />
					</div>
					<div className="data-container__inputs-box">
						<CustomerDataInput label="Phone*" />
						<CustomerDataInput label="Email*" />
					</div>
				</div>
			</div>
		</>
	);
};

export default PersonalData;
