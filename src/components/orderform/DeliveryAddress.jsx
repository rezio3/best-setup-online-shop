import React from "react";
import CustomerDataInput from "./CustomerDataInput";

const DeliveryAddress = (props) => {
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
							regex={validCityAndStreet}
							validation={props.validation}
							setValidation={props.setValidation}
							buyBtnClicked={props.buyBtnClicked}
						/>
						<CustomerDataInput
							label="Postal code*"
							inputName="postalCode"
							dataType="address"
							regex={validPostalCode}
							validation={props.validation}
							setValidation={props.setValidation}
							buyBtnClicked={props.buyBtnClicked}
						/>
					</div>
					<div className="data-container__inputs-box">
						<CustomerDataInput
							label="Street*"
							inputName="street"
							dataType="address"
							regex={validCityAndStreet}
							validation={props.validation}
							setValidation={props.setValidation}
							buyBtnClicked={props.buyBtnClicked}
						/>
						<CustomerDataInput
							label="Building number*"
							inputName="buildingNumber"
							dataType="address"
							regex={validBuildingNumber}
							validation={props.validation}
							setValidation={props.setValidation}
							buyBtnClicked={props.buyBtnClicked}
						/>
					</div>
					<div className="data-container__inputs-box">
						<CustomerDataInput
							label="Flat number"
							inputName="flatNumber"
							dataType="address"
							regex={validBuildingNumber}
							validation={props.validation}
							setValidation={props.setValidation}
							buyBtnClicked={props.buyBtnClicked}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeliveryAddress;
