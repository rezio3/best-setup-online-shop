import React, { useState } from "react";

import Banner from "./Banner";

const HeaderCarousel = () => {
	let [activeBanner, setActiveBanner] = useState({
		active: 1,
	});
	let [arrowsOff, setArrowsOff] = useState(false);
	let [whichArrow, setWhichArrow] = useState();

	const arrow = (e) => {
		let reduction;
		const arrowClicked = e.target.getAttribute("data");
		setWhichArrow(arrowClicked);
		arrowClicked === "left" ? (reduction = -1) : (reduction = +1);

		let resetCarousel;
		let ifCarouselEnds;

		arrowClicked === "left" ? (resetCarousel = 3) : (resetCarousel = 1);
		arrowClicked === "left" ? (ifCarouselEnds = 1) : (ifCarouselEnds = 3);

		console.log("ifCarouselEnds: " + ifCarouselEnds);
		console.log("resetCarousel: " + resetCarousel);
		console.log("reduction: " + reduction);
		console.log("arrow clicked: " + arrowClicked);

		if (activeBanner.active === ifCarouselEnds && !arrowsOff) {
			setActiveBanner({ ...activeBanner, active: resetCarousel });
			setArrowsOff(true);
			setTimeout(() => {
				setArrowsOff(false);
			}, 400);
		} else if (!arrowsOff) {
			setActiveBanner({
				...activeBanner,
				active: activeBanner.active + reduction,
			});
			setArrowsOff(true);
			setTimeout(() => {
				setArrowsOff(false);
			}, 400);
		}
	};

	return (
		<div className="carousel-container">
			<div
				className="arrow-container arrow-container-left"
				data="left"
				onClick={arrow}
			>
				<span
					className="material-symbols-outlined arrow-icon arrow-icon-left"
					data="left"
				>
					chevron_left
				</span>
			</div>
			<div
				className="arrow-container arrow-container-right"
				data="right"
				onClick={arrow}
			>
				<span
					className="material-symbols-outlined arrow-icon arrow-icon-right"
					data="right"
				>
					chevron_right
				</span>
			</div>
			<Banner state={activeBanner.active} clicked={whichArrow} />
		</div>
	);
};

export default HeaderCarousel;
