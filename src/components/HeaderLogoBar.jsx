import React from "react";
import bestSetupLogo from "../img/BestSetupLogo.png";

const HeaderLogoBar = () => {
	return (
		<div className="header-logo-bar">
			<img src={bestSetupLogo} className="header-logo-bar__logo" />
			<span className="header-logo-bar__contact-span">Contact Us!</span>
		</div>
	);
};

export default HeaderLogoBar;
