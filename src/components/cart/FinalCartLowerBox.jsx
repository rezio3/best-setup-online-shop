import React from "react";
import "../../style/css/finalCartLowerBox.css";
import GuaranteeBox from "./GuaranteeBox";
import guaranteeBoxesArray from "../../objects/guaranteeDelivery";

const FinalCartLowerBox = () => {
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
