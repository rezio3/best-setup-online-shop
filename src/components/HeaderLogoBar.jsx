import React from "react";
import bestSetupLogo from "../img/BestSetupLogo.png";

const HeaderLogoBar = () => {
	return (
		<div className="header-logo-bar">
			<img src={bestSetupLogo} className="header-logo-bar__logo" />
			<button className="header-logo-bar__contact-button">Contact Us!</button>
		</div>
	);
};

export default HeaderLogoBar;
