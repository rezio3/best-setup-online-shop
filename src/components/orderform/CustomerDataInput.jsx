import React from "react";

const CustomerDataInput = (props) => {
	return (
		<>
			<label className="personal-data-container__label">
				{props.label}
				<input type="text" className="personal-data-container__input" />
			</label>
		</>
	);
};

export default CustomerDataInput;
