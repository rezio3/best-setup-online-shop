import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const BuyButton = (props) => {
	const invalidFormBtnAnimation = () => {
		props.setBuyBtnClicked(true);
		console.log("nieprawidłowy formularz!!!");
	};

	let allValidationsTrue;
	for (let prop in props.validation) {
		if (props.validation[prop]) {
			allValidationsTrue = true;
		} else {
			allValidationsTrue = false;
			break;
		}
	}
	return (
		<>
			{allValidationsTrue ? (
				<NavLink to={props.linkTo}>
					<button className="total-price-window-container__delivery-button button-anim">
						{props.btnText}
						<FontAwesomeIcon icon={faAngleRight} className="arrow-right" />
					</button>
				</NavLink>
			) : (
				<button
					className="total-price-window-container__delivery-button button-anim"
					onClick={invalidFormBtnAnimation}
				>
					{props.btnText}
					<FontAwesomeIcon icon={faAngleRight} className="arrow-right" />
				</button>
			)}
		</>
	);
};

export default BuyButton;
