import React from "react";

const PaymentMethodsFooter = (props) => {
	return (
		<>
			<img
				src={props.img}
				alt={props.alt}
				className="footer-upper-container__payment-icon"
			/>
		</>
	);
};

export default PaymentMethodsFooter;
