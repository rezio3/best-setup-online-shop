import React from "react";
import CustomerDataInput from "./CustomerDataInput";

const PersonalData = () => {
	return (
		<>
			<div className="data-container">
				<h3 className="data-container__header">Personal data & contact</h3>
				<div className="data-container__inputs-container">
					<div className="data-container__inputs-box">
						<CustomerDataInput
							label="Name*"
							inputName="name"
							dataType="personal"
						/>
						<CustomerDataInput
							label="Surname*"
							inputName="surname"
							dataType="personal"
						/>
					</div>
					<div className="data-container__inputs-box">
						<CustomerDataInput
							label="Phone*"
							inputName="phone"
							dataType="personal"
						/>
						<CustomerDataInput
							label="Email*"
							inputName="email"
							dataType="personal"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default PersonalData;
