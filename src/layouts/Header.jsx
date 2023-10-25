import React from "react";
import HeaderLogoBar from "../components/HeaderLogoBar";
import HeaderCarousel from "../components/HeaderCarousel";
import "../style/css/header.css";

const Header = () => {
	return (
		<div className="header-container">
			<HeaderLogoBar />
			<HeaderCarousel />
		</div>
	);
};

export default Header;
