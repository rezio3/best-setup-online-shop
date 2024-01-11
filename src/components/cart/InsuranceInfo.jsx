import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const InsuranceInfo = (props) => {
	return (
		<>
			<div className="item-box-final__info-icon-container">
				<FontAwesomeIcon
					icon={faCircleInfo}
					className="item-box-final__info-icon"
				/>
				<div className="item-box-final__info-box show-info">
					<p className="item-box-final__info">
						By having insurance, you're covered against repair costs in case of
						accidental damage or malfunctions occurring after the warranty
						period.
					</p>
					<span className="item-box-final__insurance-price">
						Additional cost for the selected product: <b>{props.price}$</b>
					</span>
				</div>
			</div>
		</>
	);
};

export default InsuranceInfo;
