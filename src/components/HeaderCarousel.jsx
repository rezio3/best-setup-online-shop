import React, { useState } from "react";

const HeaderCarousel = () => {
	let [activeBanner, setActiveBanner] = useState({ active: 1 });
	const arrowLeft = () => {
		setActiveBanner({ ...activeBanner, active: activeBanner.active + 1 });
	};
	console.log(activeBanner.active);
	return (
		<div className="carousel-container">
			<div className="arrow-container arrow-container-left" onClick={arrowLeft}>
				<span className="material-symbols-outlined arrow-icon arrow-icon-left">
					chevron_left
				</span>
			</div>
			<div className="arrow-container arrow-container-right">
				<span className="material-symbols-outlined arrow-icon arrow-icon-right">
					chevron_right
				</span>
			</div>
			<div className="baner-bg1 baner-bg"></div>
			<div className="baner-bg2 baner-bg"></div>
			<div className="baner-bg3 baner-bg"></div>
		</div>
	);
};

export default HeaderCarousel;
