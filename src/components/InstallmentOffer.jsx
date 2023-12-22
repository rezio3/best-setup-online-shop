import React from "react";
import "../style/css/installmentOffer.css";
import zero from "../img/zero.png";

const InstallmentOffer = () => {
	return (
		<>
			<div className="installment-offer-wrapper">
				<div className="installment-offer-section">
					<h3 className="installment-offer-section__header">
						Take advantage of an attractive 0% installment offer
					</h3>
					<h4 className="installment-offer-section__header lower-header">
						for the purchase of equipment over 2800 PLN.
					</h4>
					<ul>
						<li>
							<div className="tick-ul-list" />
							<span>Up to 20 installments at 0%</span>
						</li>

						<li>
							<div className="tick-ul-list" />
							<span>APR 0%</span>
						</li>

						<li>
							<div className="tick-ul-list" />
							<span>No commission</span>
						</li>

						<li>
							<div className="tick-ul-list" />
							<span>No interest</span>
						</li>
					</ul>
					<span className="installment-offer-section__description">
						When purchasing equipment for a minimum of 2800 PLN, you can finance
						it with a voucher, <br />
						and for the remaining amount, take advantage of 0% installments.
					</span>
					<span className="installment-offer-section__link">
						Check the promotion terms and conditions.
					</span>
				</div>
				<img src={zero} className="zero-percentage-img" />
			</div>
		</>
	);
};

export default InstallmentOffer;
