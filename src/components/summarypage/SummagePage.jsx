import React from "react";
import "../../style/css/summaryPage.css";
import tick from "../../img/tick.png";

const SummaryPage = () => {
	return (
		<>
			<div className="summary-page-wrapper">
				<div className="summary-page-container">
					<h3 className="summary-page-container__header">
						Thank you for making a purchase!
					</h3>
					<img src={tick} className="summary-page-container__tick-img" />
					<span className="summary-page-container__delivery-shipped-span">
						The order will be shipped as soon as we process the payment.
					</span>
				</div>
			</div>
		</>
	);
};

export default SummaryPage;
