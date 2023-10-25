import React from "react";
import HeaderLogoBar from "../components/HeaderLogoBar";
import HeaderCarousel from "../components/HeaderCarousel";

const Header = () => {
	return (
		<div className="header-container">
			<HeaderLogoBar />
			<HeaderCarousel />
		</div>
	);
};

export default Header;
