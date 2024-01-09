import React from "react";

const PersonalData = () => {
	return (
		<>
			<div className="personal-data-container">
				<h3 className="personal-data-container__header">
					Personal data & contact
				</h3>
				<div className="personal-data-container__inputs-container">
					<div className="personal-data-container__inputs-box">
						<label className="personal-data-container__label">
							Name
							<input type="text" className="personal-data-container__input" />
						</label>
						<label className="personal-data-container__label">
							Surname
							<input type="text" className="personal-data-container__input" />
						</label>
					</div>
					<div className="personal-data-container__inputs-box">
						<label className="personal-data-container__label">
							Phone
							<input type="text" className="personal-data-container__input" />
						</label>
						<label className="personal-data-container__label">
							Email
							<input type="text" className="personal-data-container__input" />
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default PersonalData;
