import React from "react";
import CustomerDataInput from "./CustomerDataInput";

const PersonalData = () => {
	const validNameAndSurname = /^[\p{L}\s]{1,}$/u;
	const validPhoneNumber = /^[0-9\-\+\s]{9,15}$/;
	const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

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
							valid={validNameAndSurname}
						/>
						<CustomerDataInput
							label="Surname*"
							inputName="surname"
							dataType="personal"
							valid={validNameAndSurname}
						/>
					</div>
					<div className="data-container__inputs-box">
						<CustomerDataInput
							label="Phone*"
							inputName="phone"
							dataType="personal"
							valid={validPhoneNumber}
						/>
						<CustomerDataInput
							label="Email*"
							inputName="email"
							dataType="personal"
							valid={validEmail}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default PersonalData;
