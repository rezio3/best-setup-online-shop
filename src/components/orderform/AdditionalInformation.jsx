import React from "react";

const AdditionalInformation = () => {
	return (
		<>
			<div className="additional-information-container">
				<h3 className="additional-information-container__header">
					Additional information
				</h3>
				<textarea
					className="additional-information-container__text-area"
					type="textarea"
				></textarea>
			</div>
		</>
	);
};

export default AdditionalInformation;
