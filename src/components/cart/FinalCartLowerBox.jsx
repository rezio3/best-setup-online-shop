import React from "react";
import icon1 from "../../img/icon1.png";
import icon2 from "../../img/icon2.png";
import icon3 from "../../img/icon3.png";
import "../../style/css/finalCartLowerBox.css";
import GuaranteeBox from "./GuaranteeBox";

const FinalCartLowerBox = () => {
	const guaranteeBoxesArray = [
		{
			firstText: "Secure Shopping",
			secondText: "Thanks to TLS Encryption",
			img: icon1,
		},
		{
			firstText: "Free Returns Within 15 Days",
			secondText: "Via Parcel Locker or at Our Stores",
			img: icon2,
		},
		{
			firstText: "Technical Support",
			secondText: "Email, Phone, and Chat",
			img: icon3,
		},
	];
	return (
		<>
			<div className="final-cart-lower-box-wrapper">
				<div className="guarantee-container">
					{guaranteeBoxesArray.map((e) => {
						return (
							<GuaranteeBox
								txt1={e.firstText}
								txt2={e.secondText}
								img={e.img}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default FinalCartLowerBox;
