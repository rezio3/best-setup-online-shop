import React from "react";

const CustomerDataInput = (props) => {
	return (
		<>
			<label className="data-container__label">
				{props.label}
				<input type="text" className="data-container__input" />
			</label>
		</>
	);
};

export default CustomerDataInput;
