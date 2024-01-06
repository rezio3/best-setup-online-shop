import React from "react";

const GuaranteeBox = (props) => {
	return (
		<>
			<div className="guarantee-container__box">
				<img
					src={props.img}
					className="guarantee-container__icon-img"
					height={"50px"}
				/>
				<div className="guarantee-container__description-container">
					<span className="guarantee-container__description">{props.txt1}</span>
					<span className="guarantee-container__description guarantee-container__description--gray">
						{props.txt2}
					</span>
				</div>
			</div>
		</>
	);
};

export default GuaranteeBox;
