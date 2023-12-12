import React from "react";
import bestSetupLogo from "../img/BestSetupLogo.png";
import "../style/css/buttonsAnim.css";
import { Link } from "react-router-dom";

const HeaderLogoBar = () => {
	return (
		<div className="header-logo-bar">
			<Link to="/">
				<img src={bestSetupLogo} className="header-logo-bar__logo" />
			</Link>
			<div className="header-logo-bar__buttons-container">
				<button className="header-logo-bar__button button-anim">
					About Us
				</button>
				<button className="header-logo-bar__button button-anim">Service</button>
				<button className="header-logo-bar__button button-anim">
					Contact Us!
				</button>
			</div>
		</div>
	);
};

export default HeaderLogoBar;
